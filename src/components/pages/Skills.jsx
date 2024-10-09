import html from "../../assets/html-5.png"
import css from "../../assets/css-3.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png"
import js from "../../assets/js.png"
import react from "../../assets/reactjs.png"
import node from "../../assets/nodejs.png"
import express from "../../assets/expressjs.png"
import mongo from "../../assets/mongoDB.png"
import figma from "../../assets/figma.png"
import git from "../../assets/git.png"
import github from "../../assets/github.png"

const Skills = () => {
  return (
    <main className="min-h-[90vh] max-w-[100vw] md:h-screen px-4 lg:ps-32 py-10">
      <div className="flex flex-col justify-center items-center gap-4 my-4">
        <h1 className="titulos text-textDarkColor text-4xl lg:text-5xl font-bold">Habilidades</h1>
        <p className="textos text-textBlack text-md lg:text-lg lg:mt-10">Estoy especializado en desarrollo web con HTML5, CSS3 y JavaScript junto con React.js. Entre otras herramientas y librerías que utilizo, se encuentran Bootstrap, Tailwind y una variada lista de librerías de React.</p>
        <p className="textos text-textBlack text-md lg:text-lg">Además cuento con experiencia trabajando colaborativamente donde utilicé metodologías Agile como Scrum y Kanban, Trello y Jira para gestionar los proyectos y Git y GitHub como sistema de control de versiones.</p>
      </div>
      <div className="overflow-hidden whitespace-nowrap mt-20 lg:mt-72">
        <div className="inline-block animate-marquee space-x-10">
          <img src={html} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="html5" />
          <img src={css} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="css" />
          <img src={bootstrap} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="bootstrap" />
          <img src={tailwind} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="tailwind" />
          <img src={js} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="js" />
          <img src={react} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="react" />
          <img src={node} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="node" />
          <img src={express} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="express" />
          <img src={mongo} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="mongoDB" />
          <img src={figma} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="figma" />
          <img src={git} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="git" />
          <img src={github} className="size-24 p-4 my-4 inline-block border-2 border-whiteBg shadow-logos" alt="github" />

          
        </div>
      </div>
    </main>
  )
}

export default Skills