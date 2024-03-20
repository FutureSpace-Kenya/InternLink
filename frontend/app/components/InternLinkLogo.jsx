export function CompanyLogo() {
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
