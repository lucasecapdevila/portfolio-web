import { useTranslation } from "react-i18next";
import imagen from "../../assets/lucas2.jpg";
const About = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <main className="min-h-[90vh] md:h-screen px-4 lg:ps-40 py-10">
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
          <img
            src={imagen}
            className="rounded-lg md:w-2/4 lg:w-96 xl:w-1/4"
            alt="lucas capdevila"
            data-aos="fade-right"
            data-aos-duration="1800"
          />
          <div>
            <div
              className="my-4 md:my-0"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1800"
            >
              <h1 className="titulos text-textDarkColor text-4xl text-center md:text-left font-bold uppercase">
                {t("about-me.title")}
              </h1>
              <p className="textos text-textBlack text-md lg:text-lg mt-2">
                {t("about-me.text-1")}
              </p>
              <p className="textos text-textBlack text-md lg:text-lg my-2">
                {t("about-me.text-2")}
              </p>
            </div>
            <div
              className="md:mt-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1800"
            >
              <h2 className="titulos text-textDarkColor text-3xl font-bold">
                {t("about-me.subtitle")}
              </h2>
              <p className="textos text-textBlack text-md lg:text-lg mt-2">
                {t("about-me.text-3")}
              </p>
              <p className="textos text-textBlack text-md lg:text-lg mt-2">
                {t("about-me.text-4")}
              </p>
          </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
