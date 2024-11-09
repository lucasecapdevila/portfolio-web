import imagen from "../../assets/lucas2.jpg";
const About = () => {
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
                Sobre mí
              </h1>
              <p className="textos text-textBlack text-md lg:text-lg mt-2">
                Me llamo Lucas Capdevila, soy de Tucumán, Argentina. Estudiante de la carrera Tecnicatura Universitaria en
                Programación de la Universidad Tecnológica Nacional.
              </p>
              <p className="textos text-textBlack text-md lg:text-lg my-2">
                Actualmente me encuentro realizando trabajos como FullStack Web
                Developer con experiencia en frameworks como React, Node.js,
                MongoDB Y Express.js
              </p>
            </div>
            <div
              className="md:mt-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1800"
            >
              <h2 className="titulos text-textDarkColor text-3xl font-bold">
                Otros intereses
              </h2>
              <p className="textos text-textBlack text-md lg:text-lg mt-2">
                Si bien me apasiona la programación y estoy constantemente
                aprendiendo nuevas tecnologías para el desarrollo FullStack,
                también tengo otros intereses.
              </p>
              <p className="textos text-textBlack text-md lg:text-lg mt-2">
                Entre mis actividades favoritas están ver películas, los deportes,
                pasar tiempo con mis amigos y escuchar música, siempre con un mate
                a mano 🧉
              </p>
          </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
