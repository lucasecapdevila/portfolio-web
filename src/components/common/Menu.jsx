import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolder,
  faGlobeAmericas,
  faMoon,
  faPhone,
  faScrewdriverWrench,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo-black2.png";
import spain from "../../assets/spain.svg";
import uk from "../../assets/uk.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const [t, i18n] = useTranslation("global");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarRef]);

  return (
    <>
      <div className=" flex justify-end fixed top-0 left-0 z-40">
        <button
          onClick={toggleSidebar}
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 m-3 text-sm text-gray-500 lg:hidden bg-whiteBg rounded-full  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

      <aside
        id="logo-sidebar"
        ref={sidebarRef}
        className={`enlaces fixed h-full top-0 left-0 z-40 w-60 md:w-80 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col px-3 py-2 h-full overflow-y-auto bg-mediumColor md:w-11/12 lg:w-1/3">
          <Link to="/" className="flex w-16 mt-3 ms-3 md:me-24 lg:me-0">
            <img
              src={logo}
              className="size-16 me-3 w-full"
              alt="lucasecapdevila logo"
            />
          </Link>
          <ul className="lg:text-center flex-grow ms-3 lg:ms-0 mt-10 space-y-2 md:space-y-4 font-medium text-lg">
            <li>
              <Link
                to="/about"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center"
              >
                <div className="relative group">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-2xl relative"
                  />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                    {t("menu.about-me")}
                  </span>
                </div>
                <span className="ms-4 lg:hidden">{t("menu.about-me")}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center"
              >
                <div className="relative group">
                  <FontAwesomeIcon
                    icon={faScrewdriverWrench}
                    className="text-2xl relative"
                  />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                    {t("menu.skills")}
                  </span>
                </div>
                <span className="ms-4 lg:hidden">{t("menu.skills")}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center"
              >
                <div className="relative group">
                  <FontAwesomeIcon
                    icon={faFolder}
                    className="text-2xl relative"
                  />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                    {t("menu.projects")}
                  </span>
                </div>
                <span className="ms-4 lg:hidden">{t("menu.projects")}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center"
              >
                <div className="relative group">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-2xl relative"
                  />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                    {t("menu.contact")}
                  </span>
                </div>
                <span className="ms-4 lg:hidden">{t("menu.contact")}</span>
              </Link>
            </li>
            <li>
              <span className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center cursor-pointer">
                <Dropdown
                  className="bg-lightColor"
                  dismissOnClick={false}
                  placement="right"
                  renderTrigger={() => (
                    <FontAwesomeIcon
                      icon={faGlobeAmericas}
                      className="text-2xl relative"
                    />
                  )}
                >
                  <DropdownItem className="bg-lightColor" onClick={() => i18n.changeLanguage("es")}>
                    <img src={spain} className="w-7" alt="Spain flag" />
                  </DropdownItem>
                  <Dropdown.Divider className="bg-lightColor" />
                  <DropdownItem className="bg-lightColor" onClick={() => i18n.changeLanguage("en")}>
                    <img src={uk} className="w-7" alt="UK flag" />
                  </DropdownItem>
                </Dropdown>
              </span>
            </li>
            {/* 
            <li>
              <Link
                to="/"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon className="text-2xl me-4" icon={faSun} />
                <FontAwesomeIcon icon={faMoon} className="text-2xl" />
                <span className="ms-4"></span>
              </Link>
            </li> */}
          </ul>
          <ul className="ms-3 lg:ms-0 md:columns-2 lg:columns-1 lg:text-center space-y-3 font-medium text-lg">
            <li>
              <Link
                to="mailto:lcapdevila60@gmail.com?subject=FullStack Portfolio&body=Hola ! Vi tu portfolio y me interesan tus servicios."
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center hvr-pop"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/lucasecapdevila/"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center hvr-pop"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/lucasecapdevila"
                target="_blank"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center hvr-pop"
              >
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/lucasecapdevila/"
                target="_blank"
                className="inline-flex items-center text-xl p-2 ps-0 text-textBlack rounded-lg dark:text-white dark:hover:bg-gray-700 group lg:justify-center hvr-pop"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Menu;
