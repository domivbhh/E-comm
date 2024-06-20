import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import {Toaster} from 'react-hot-toast'

function App() {


  return (
    <div>
      <Toaster/>
        <Header/>
        <main className="pt-16 bg-slate-200 min-h-[calc(100vh)]">
        <Outlet/>
        </main>
    </div>
  )
}

export default App
