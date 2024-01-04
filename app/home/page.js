import Image from "next/image";
import students from "../../assets/students/index";
import companies from "../../assets/companies/index";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="top-100">
        <p> Student images </p>
        <div>
          {/* {students.map((student) => (
            <Image src={student} />
          ))} */}
        </div>
        <p>Company images</p>
        <div>
          {/* {companies.map((company) => (
            <Image src={company} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div style={{ backgroundColor: "#C6F6D5" }}>
      <div
        className="flex flex-col items-end justify-start py-2"
        style={{ minHeight: "67px" }}
      >
        <div className="absolute top-0 left-0 ml-2">
          <InternLinkLogo />
        </div>
        <div className="flex absolute top-0 right-0 mt-2 mr-2">
          <SignUp />
          <div style={{ marginLeft: "4px" }}></div>
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export function InternLinkLogo() {
  return (
    <div className="flex" style={{ maxHeight: "50px" }}>
      <div className="w-fit relative flex flex-col items-center cursor-pointer">
        <h1 className="text-6xl font-bold">
          <span className="text-green-400">Intern</span>
          Link&trade;
        </h1>
        <div className="absolute top-[55px] right-0 mb-4 text-xs font-medium text-orange-800 flex flex-col items-end"></div>
      </div>
    </div>
  );
}

export function SignUp() {
  return (
    <div style={{ maxHeight: "50px" }}>
      <button className="btn btn-primary ">Sign Up</button>
    </div>
  );
}

export function SignIn() {
  return (
    <div style={{ maxHeight: "50px" }}>
      <button className="btn btn-primary bg-green-500">Sign In</button>
    </div>
  );
}
