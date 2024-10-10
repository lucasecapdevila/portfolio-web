import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Menu from "../common/Menu"
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/projects/Projects";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter