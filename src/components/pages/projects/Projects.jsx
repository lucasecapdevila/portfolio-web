import CardProject from "./CardProject"
import { proyectos } from '../../../utils/projectsData'
import { Button } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <main className="min-h-[90vh] min-w-full md:h-screen px-4 pt-10 pb-5 lg:ps-32">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="titulos text-textDarkColor text-4xl md:text-5xl font-bold">Proyectos</h1>
        <p className="textos text-textBlack text-md md:px-8 md:text-lg lg:mt-10">A continuación te presento algunos de los proyectos que he creado a partir de HTML y más recientemente, con React.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 mt-10">
        {proyectos.map((proyecto) => (
          <CardProject key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <div className="flex justify-center xl:justify-end xl:mt-5">
        <Link to='/' className="text-lg">
          <Button pill color={'success'} className="my-4 inline">
            <p className="textos text-whiteBg text-lg">Ver más proyectos</p>
            <span className="ml-2 text-lg">
              <FontAwesomeIcon icon={faArrowRight}/>
            </span>
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default Projects