import CardProject from "./CardProject"
import { proyectos } from '../../../utils/projectsData'
import { Button } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  return (
    <main className="min-h-[90vh] md:h-screen px-4 py-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-textDarkColor text-4xl md:text-5xl font-bold">Proyectos</h1>
        <p className="text-textBlack text-md lg:text-lg">A continuación te presento algunos de los proyectos que he creado a partir de HTML y más recientemente, con React.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {proyectos.map((proyecto) => (
          <CardProject key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <Button pill color={"success"} className="my-4 mx-auto">
        <p className="text-lg">Ver más proyectos</p>
        <span className="ml-2 text-lg">
          <FontAwesomeIcon icon={faArrowRight}/>
        </span>
      </Button>
    </main>
  )
}

export default Projects