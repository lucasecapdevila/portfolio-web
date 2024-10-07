import imagen from "../../assets/lucas2.jpg"
const About = () => {
  return (
    <>
      <main className="min-h-[90vh] md:h-screen px-4 py-10">
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <img src={imagen} className="rounded-lg" alt="lucas capdevila" />
          <h1 className="titulos text-reactLightBlue text-5xl font-bold">Sobre mí</h1>
          <p className="textos text-textBlack text-lg"></p>
        </div>
      </main>
    </>
  )
}

export default About