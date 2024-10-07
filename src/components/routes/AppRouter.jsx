import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Menu from "../common/Menu"
import About from "../pages/About";

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
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter