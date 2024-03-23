import { useState, useEffect } from "react";
import { useSession, setSession } from "next-auth/client";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const api_url = "http://localhost:8000/api/v2/auth/";

const useFetchWithTokenRefresh = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const access = session?.token?.token?.token?.user?.access;
        const user = jwt_decode(access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) <= 1;

        if (isExpired) {
          const response = await fetch(`${api_url}/api/token/refresh/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: access }),
          });

          const newTokens = await response.json();

          if (response.ok) {
            session = {
              ...session,
              access: newTokens.access,
              refresh: newTokens.refresh,
            };
            setSession(session);
          } else {
            throw new Error("Error refreshing access token");
          }
        }

        const response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${access}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error fetching data");
        }

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchWithTokenRefresh;
