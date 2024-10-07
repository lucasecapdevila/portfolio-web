import 'flowbite'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();
import AppRouter from "./components/routes/AppRouter"

function App() {

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
