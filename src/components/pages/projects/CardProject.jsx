import { Button, Card } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const CardProject = ({ proyecto }) => {
  const { t } = useTranslation("global");

  return (
    <Card className="projectCard max-w-sm lg:max-w-md xl:max-w-lg">
      <img src={proyecto.imagen} alt={proyecto.titulo}/>
      <h5 className="titulos text-2xl font-bold tracking-tight text-textBlack">
        {proyecto.titulo}
      </h5>
      <p className="textos font-normal text-textBlack">
        {t(`projects.project_${proyecto.id}_description`)}
      </p>
      <ul className="flex flex-wrap">
        {proyecto.tecnologias.map((tecnologia) => {
          return <li key={tecnologia} className="textos mr-2 mb-3 bg-gray-300 px-2 rounded">{tecnologia}</li>
        })}
      </ul>
      <div className="textos flex justify-center items-center gap-4 md:mt-auto">
        <Button className="w-full bg-textDarkColor">
          <Link to={proyecto.repo} target="_blank">GitHub</Link>
        </Button>
        <Button className="w-full bg-textDarkColor">
          <Link to={proyecto.deploy} target="_blank">Deploy</Link>
        </Button>
      </div>
    </Card>
  )
}

export default CardProject