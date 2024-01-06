export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <h1 className="text-6xl font-bold">
            <span className="text-green-400">Intern</span>Link&trade;
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl">Page Not Found</p>
        <p className="text-xl">The resource is not available</p>
      </div>
    </div>
  );
}
