import "bootstrap/dist/css/bootstrap.min.css"
// import * as bootstrap from "bootstrap"
import './App.css'

import Header from "./components/header"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {
  const title = "Galeria de imagenes react"
  const data = [
    {
      img: "https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=808",
      titulo: "titulo",
      desc: "descripcion"
    },
    {
      img: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      titulo: "titulo",
      desc: "descripcion"
    },
    {
      img: "https://images.unsplash.com/photo-1471201187657-6406da15e43b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      titulo: "titulo",
      desc: "descripcion"
    }
  ]

  return (
    <div className="App">
       <Header title={title}></Header>
       <section className="row">
        <div className="">
       <Card contenido={data[1]}></Card>
        </div>
        <div className="">
       <Card contenido={data[2]}></Card>
        </div>
        <div className="">
       <Card contenido={data[1]}></Card>
        </div>
        <div className="">
       <Card contenido={data[2]}></Card>
        </div>
        <div className="">
       <Card contenido={data[1]}></Card>
        </div>
        <div className="">
       <Card contenido={data[2]}></Card>
        </div>
       </section>
       <Footer></Footer>
    </div>
  )
}

export default App
