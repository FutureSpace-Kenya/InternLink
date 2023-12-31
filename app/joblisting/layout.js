export default function Layout({ children }) {
  return (
    <body>
      <nav className="flex bg-aquablue dark-blue">
        <img src="path_to_image" alt="Logo" />
        <ul className="flex list-none m-0 p-0">
          <li className="mr-10">
            <a
              href="#"
              className="font-bold underline text-white hover:text-aquablue hover:underline cursor-pointer"
            >
              About
            </a>
          </li>
          <li className="mr-10">
            <a
              href="#"
              className="font-bold underline text-white hover:text-aquablue hover:underline cursor-pointer"
            >
              Services
            </a>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto p-4">{children}</div>
    </body>
  );
}
