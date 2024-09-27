import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo-black2.png"
import { Link } from "react-router-dom";
import { faFlag, faFolder, faHouseChimney, faMoon, faPhone, faScrewdriverWrench, faSun, faUser } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-reactLightBlue">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex ms-2 md:me-24">
              <img
                src={logo}
                className="size-16 me-3"
                alt="FlowBite Logo"
              />
            </Link>
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 mb-2 text-sm text-gray-500 bg-whiteBg rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 mt-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-reactLightBlue sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium text-lg">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-textBlack rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faHouseChimney} />
                <span className="ms-3">Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center p-2 text-textBlack rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="ms-4">Sobre mí</span>
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="flex items-center p-2 text-textBlack rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faScrewdriverWrench} />
                <span className="ms-4">Habilidades</span>
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="flex items-center p-2 text-textBlack rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faFolder} />
                <span className="ms-4">Proyectos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="flex items-center p-2 text-textBlack rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faPhone} />
                <span className="ms-4">Contacto</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-textBlack rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faFlag} />
                <span className="ms-4">EN/ES</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-textBlack rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon className=" me-4" icon={faSun} />
                <FontAwesomeIcon icon={faMoon} />
                <span className="ms-4"></span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Menu;
