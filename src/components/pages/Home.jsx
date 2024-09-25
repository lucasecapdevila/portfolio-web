import { Button } from "flowbite-react"
import imagen from "../../assets/lucas.jpg"
import pdf from "../../public/CVLucasCapdevila-prog.pdf"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="h-screen">
      <div className="relative flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 xl:w-3/5 h-2/5 md:h-full bg-reactLightBlue"></div>
        <img
          src={imagen}
          className="absolute inset-0 size-64 md:size-80 xl:size-96 rounded-full border-8 border-whiteBg md:border-none object-cover mx-auto my-auto transform -translate-x-0 -translate-y-1/3 md:-translate-x-1/3 md:-translate-y-1"
          alt="lucasecapdevila" />
        <div className="w-full md:w-1/2 xl:w-3/5 flex flex-col justify-center items-center md:items-start mt-36 md:mt-0 bg-whiteBg">
          <div className="flex flex-col-reverse justify-center items-center md:items-start md:ms-20">
            <h1 className="text-textBlack text-4xl font-bold">Lucas Capdevila</h1>
            <h2 className="text-textBlack text-2xl font-bold">Fullstack Developer</h2>
          </div>
          <p className="text-textBlack text-lg text-center md:text-left font-normal content-end mt-4 md:ms-20 md:mb-20">Soy un apasionado desarrollador web especializado en Stack MERN con experiencia creando aplicaciones web con React.js, Node/Express y MongoDB. Estoy muy interesado en aprender nuevas tecnologías para implementarlas en mis proyectos.</p>
          <a href={pdf} download className="w-full md:w-2/3 md:ms-16 px-4 mt-4 justify-center">
            <Button pill outline className="cvBtn w-full border-4 border-reactLightBlue p-0 text-reactLightBlue font-bold">Descargar CV</Button>
          </a>
          <Button as={Link} to="/contacto" pill className="contactoBtn w-full md:w-3/5 md:ms-20 md:px-4 p-0 mt-4 bg-reactLightBlue border-4 text-textBlack font-bold">Contacto</Button>
        </div>
      </div>
    </main>
  )
}

export default Home