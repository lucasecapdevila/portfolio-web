import { Button } from "flowbite-react"
import imagen from "../../assets/lucas.jpg"
import pdf from "/public/CVLucasCapdevila-prog.pdf"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="h-screen">
      <div className="relative flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 xl:w-2/5 h-2/5 md:h-full bg-reactLightBlue"></div>
        <img
          src={imagen}
          className="absolute inset-0 size-64 md:size-80 xl:size-96 rounded-full border-8 border-whiteBg md:border-none object-cover mx-auto my-auto transform -translate-x-0 -translate-y-1/3 md:-translate-x-1/3 md:-translate-y-1 xl:-translate-x-1/2"
          alt="lucasecapdevila" />
        <div className="w-full md:w-1/2 xl:w-3/5 flex flex-col justify-center items-center md:items-start mt-36 md:mt-0 bg-whiteBg">
          <div className="flex flex-col-reverse justify-center items-center md:items-start md:ms-20 xl:ms-72">
            <h1 className="text-textBlack text-4xl font-bold">Lucas Capdevila</h1>
            <h2 className="text-textBlack text-2xl font-bold">Fullstack Developer</h2>
          </div>
          <p className="text-textBlack text-lg text-center md:text-left font-normal content-end px-2 md:ps-0 md:pe-2 mt-4 md:ms-20 md:mb-20 xl:ms-72 xl:mb-20">Soy un apasionado desarrollador web especializado en Stack MERN con experiencia creando aplicaciones web con React.js, Node/Express y MongoDB. Estoy muy interesado en aprender nuevas tecnologías para implementar en mis proyectos.</p>
          <div className="w-full md:w-2/3 md:ms-20 xl:ms-56 px-4 xl:px-0 md:px-0 xl:flex justify-start">
            <a href={pdf} download className="w-full md:w-2/3 xl:w-2/4 md:ms-16 px-4 xl:px-0 mt-4 justify-center">
              <Button pill outline className="cvBtn w-full border-4 border-reactLightBlue p-0 text-reactLightBlue font-bold">Descargar CV</Button>
            </a>
            <Link className="hidden md:inline w-full md:w-2/3 xl:w-2/4 md:ms-16 xl:ms-10 px-4 mt-4 justify-center">
              <Button to="/contacto" pill className="contactoBtn w-full bg-reactLightBlue border-4 text-whiteBg font-bold">Contacto</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home