import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { NextAuthProvider } from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InternLink: Bridging Interns and Companies in Kenya",
  description: "InternLink is a leading platform dedicated to seamlessly connecting interns and attaches with top companies across Kenya. We offer a robust database of internship and attachment opportunities, making it easier for students and recent graduates from institutions like Chuka University to kickstart their careers.",
  keywords: "internship opportunities Kenya, attachment opportunities Kenya, career development,Chuka University, Chuka University internships, free internships Kenya, company intern connections, InternLink platform, job search Kenya, career opportunities for graduates, professional networking Kenya, work placement Kenya, internship application, attachment application, engineering internships Kenya, business internships Kenya, IT internships Kenya, marketing internships Kenya, finance internships Kenya, HR internships Kenya, medical internships Kenya, legal internships Kenya, environmental internships Kenya, NGO internships Kenya, government internships Kenya, private sector internships Kenya, startup internships Kenya, tech internships Kenya, media internships Kenya, education internships Kenya, agricultural internships Kenya, hospitality internships Kenya, sports internships Kenya, arts internships Kenya, science internships Kenya, research internships Kenya, international internships Kenya, virtual internships Kenya, part-time internships Kenya, full-time internships Kenya, paid internships Kenya, volunteer opportunities Kenya, undergraduate internships Kenya, graduate internships Kenya, postgraduate internships Kenya, skill development programs Kenya, career advice Kenya, mentorship programs Kenya, industry exposure Kenya, professional development Kenya, career readiness Kenya, employment skills Kenya, career coaching Kenya, job market trends Kenya, workforce readiness Kenya, internship listings Kenya, career fairs Kenya, internship recruitment Kenya, career services Kenya, internship guidance Kenya, career planning Kenya, professional growth Kenya, career exploration Kenya, job training programs Kenya, workforce development Kenya, employment opportunities Kenya, career transition Kenya, job placement services Kenya, career advancement Kenya, professional networking events Kenya, career workshops Kenya, resume building Kenya, interview preparation Kenya, job search strategies Kenya, career counseling Kenya, employment advice Kenya, career management Kenya, professional skills development Kenya, internship success strategies Kenya, career building Kenya, job search assistance Kenya, career development resources Kenya, professional career opportunities Kenya, career networking Kenya, FutureSpace Kenya, InternLink Kenya, Chuka University Kenya, Futurespace Technologies, Kenya",
  authors: "Raccoon254, Jimmy Kimunyi, Sherry Obare (Chuka University), Brian Kingara, Nimrod, Steve Tom, Kenya, FutureSpace, InternLink",
  robots: "index, follow",
  //og
  og:{
    title: "InternLink: Bridging Interns and Companies in Kenya",
    description: "InternLink is a leading platform dedicated to seamlessly connecting interns and attaches with top companies across Kenya. We offer a robust database of internship and attachment opportunities, making it easier for students and recent graduates from institutions like Chuka University to kickstart their careers.",
    type: "website",
    url: "https://intern.co.ke",
    image: "https://intern.co.ke/images/og-image.jpg",
    site_name: "InternLink",
    locale: "en_US",
  },
  twitter:{
    card: "summary_large_image",
    title: "InternLink: Bridging Interns and Companies in Kenya",
    creator: "Futurespace"
  },
  googlebot: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={"winter"}>
      <body className={inter.className}>
      <NextAuthProvider>
        {children}
        <script src="/icons/fontawesome.js" crossOrigin="anonymous"></script>
      </NextAuthProvider>
      </body>
    </html>
  );
}
