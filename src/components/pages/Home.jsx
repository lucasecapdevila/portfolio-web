import { Button } from "flowbite-react"
import imagen from "../../assets/lucas.jpg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="h-screen">
      <div className="relative flex flex-col xl:flex-row h-full">
        <div className="w-full xl:w-3/5 h-2/5 xl:h-full bg-reactLightBlue"></div>
        <img
          src={imagen}
          className="absolute inset-0 size-64 xl:size-96 rounded-full border-8 border-whiteBg md:border-none object-cover mx-auto my-auto transform -translate-x-0 -translate-y-1/3 md:translate-x-0 md:-translate-y-1/2"
          alt="lucasecapdevila" />
        <div className="w-full xl:w-3/5 flex flex-col justify-center items-center mt-36 bg-whiteBg">
          <div className="flex flex-col-reverse justify-center items-center">
            <h1 className="text-textBlack text-4xl font-bold">Lucas Capdevila</h1>
            <h2 className="text-textBlack text-2xl font-bold">Fullstack Developer</h2>
          </div>
          <p className="text-textBlack text-lg text-center font-normal content-end mt-4">Soy un apasionado desarrollador web especializado en Stack MERN con experiencia creando aplicaciones web con React.js, Node/Express y MongoDB. Estoy muy interesado en aprender nuevas tecnologías para implementarlas en mis proyectos.</p>
        </div>
      <Button as={Link} pill outline className="CvBtn mx-4 mt-4 bg-black border-4 border-reactLightBlue p-0 text-reactLightBlue font-bold">Descargar CV</Button>
      </div>
    </main>
  )
}

export default Home