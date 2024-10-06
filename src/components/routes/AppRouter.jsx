import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Menu from "../common/Menu"

export async function getStaticProps() {
  return {
    props: {},
  };
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/*" element={<Menu />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter