export default function Layout({ children }) {
  return (
    <body className="flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="py-2" style={{ minHeight: "67px" }}>
          <div className="absolute top-0 left-0 ml-2">
            <div className="flex" style={{ maxHeight: "50px" }}>
              <div className="w-fit relative flex flex-col items-center cursor-pointer">
                <h1 className="text-6xl font-bold">
                  <span className="text-green-400">Intern</span>
                  Link&trade;
                </h1>
                <div className="absolute top-[55px] right-0 mb-4 text-xs font-medium text-orange-800 flex flex-col items-end"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto p-4 flex-grow">{children}</div>
    </body>
  );
}
