import { Button, Card } from "flowbite-react"
import { Link } from "react-router-dom"

const CardProject = ({ proyecto }) => {
  return (
    <Card className="max-w-sm">
      <img src={proyecto.imagen} alt={proyecto.titulo} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {proyecto.titulo}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {proyecto.descripcion}
      </p>
      <ul className="flex flex-wrap">
        {proyecto.tecnologias.map((tecnologia) => {
          return <li key={tecnologia} className="mr-2 mb-3 bg-gray-300 px-2 rounded">{tecnologia}</li>
        })}
      </ul>
      <div className="flex justify-center items-center gap-4">
        <Button className="w-full" color={"success"}>
          <Link to={proyecto.repo} target="_blank">GitHub</Link>
        </Button>
        <Button className="w-full" color={"success"}>
          <Link to={proyecto.deploy} target="_blank">Deploy</Link>
        </Button>
      </div>
    </Card>
  )
}

export default CardProject