import CardProject from "./CardProject"

const Projects = () => {
  return (
    <main className="min-h-[90vh] md:h-screen px-4 py-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-textDarkColor text-4xl md:text-5xl font-bold">Proyectos</h1>
        <p className="text-textBlack text-md lg:text-lg">A continuación te presento algunos de los proyectos que he creado a partir de HTML y más recientemente, con React.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <CardProject />
      </div>
    </main>
  )
}

export default Projects