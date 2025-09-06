import { useState } from 'react'

import './App.css'
import SideBar from './Components/Sidebar/Sidebar'
import MainePage from './Components/Maine/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
<SideBar></SideBar>
<MainePage></MainePage>

  </>
  )
}

export default App
