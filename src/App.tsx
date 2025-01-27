import { GlobalStyles } from "@mui/material"
import Home from "./Pages/Home/Home"

const App = () => {

  return (
    <>
      <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' } }} />
      <Home/>
    </>
  )
}

export default App
