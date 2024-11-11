import { Button } from "flowbite-react";
import imagen from "../../assets/lucas.jpg";
import pdf from "/public/CVlucasCapdevila.pdf";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <main className="min-h-[90vh] md:h-screen">
      <div className="relative flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 xl:w-2/5 h-2/5 md:h-full md:bg-lightColor"></div>
        <img
          src={imagen}
          className="absolute inset-0 size-60 md:size-80 xl:size-96 rounded-full object-cover mx-auto my-auto transform -translate-x-0 -translate-y-3/4 md:-translate-x-1/3 md:-translate-y-1 xl:-translate-x-1/2"
          alt="lucasecapdevila"
        />
        <div className="w-full md:w-1/2 xl:w-3/5 flex flex-col grow gap-2 justify-center items-center md:items-start mt-8 md:mt-0 bg-whiteBg">
          <div className="flex flex-col-reverse justify-center items-center md:items-start md:ms-20 xl:ms-72">
            <h1 className="titulos text-textBlack text-3xl md:text-4xl font-bold uppercase">
              Lucas Capdevila
            </h1>
            <h2 className="titulos text-textBlack text-2xl font-bold">
              Fullstack Developer
            </h2>
          </div>
          <p className="text-textBlack text-lg md:text-xl text-center md:text-left font-normal content-end px-2 md:ps-0 md:pe-2 mt-4 md:ms-20 md:mb-20 xl:ms-72 xl:mb-20">
            {t("home.introduction")}
          </p>
          <div className="w-full md:w-2/3 md:ms-20 xl:ms-56 px-4 xl:px-0 md:px-0 xl:flex justify-start">
            <a
              href={pdf}
              download
              className="w-full md:w-2/3 xl:w-2/4 md:ms-16 px-4 xl:px-0 mt-4 justify-center"
            >
              <Button
                pill
                outline
                className="cvBtn w-full border-4 border-textDarkColor p-0 text-textDarkColor font-bold"
              >
                {t("home.cv-button")}
              </Button>
            </a>
            <Link className="hidden md:inline w-full md:w-2/3 xl:w-2/4 md:ms-16 xl:ms-10 px-4 mt-4 justify-center">
              <Button
                to="/contacto"
                pill
                className="contactoBtn w-full bg-textDarkColor border-4 text-whiteBg font-bold"
              >
                {t("home.contact-button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;