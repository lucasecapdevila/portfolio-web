import imagen from "../../assets/lucas2.jpg"
const About = () => {
  return (
    <>
      <main className="min-h-[90vh] md:h-screen px-4 py-10">
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <img src={imagen} className="rounded-lg" alt="lucas capdevila" data-aos="fade-right" data-aos-duration="1800" />
          <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1800">
            <h1 className="titulos text-reactLightBlue text-4xl text-center font-bold">Sobre mí</h1>
            <p className="textos text-textBlack text-md mt-5">Me llamo Lucas Capdevila, soy de Tucumán, Argentina. Soy un estudiante de la carrera de la Tecnicatura Universitaria en Programación de la Universidad Tecnológica Nacional.</p>
            <p className="textos text-textBlack text-md my-2">Actualmente me encuentro realizando trabajos como FullStack Web Developer con experiencia en frameworks como React, Node.js, MongoDB Y Express.js</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1800">
            <h2 className="titulos text-reactLightBlue text-3xl font-bold">Otros intereses</h2>
            <p className="textos text-textBlack text-md mt-5">Si bien me apasiona la programación y estoy constantemente aprendiendo nuevas tecnologías para el desarrollo FullStack, también tengo otros intereses.</p>
            <p className="textos text-textBlack text-md my-2">Entre mis actividades favoritas están las películas, los deportes, pasar tiempo con mis amigos y escuchar música, siempre con un mate a mano 🧉</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About