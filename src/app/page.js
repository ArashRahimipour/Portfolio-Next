import About from '@/componenets/About'
import Navbar from '@/componenets/Navbar'
import  Main  from '@/componenets/Main'
// import Image from 'next/image'
import Skill from '@/componenets/Skills'
import Projects from '@/componenets/Project'
import Contact from '@/componenets/Contact'


export default function Home() {
  return (
    <main>
      <div>
       <Navbar/>
       <br/>
       <Main/>
       <About/>
       <Skill/>
       <br/>
       <Projects/>
       <Contact/>
      </div>
    </main>
  )
}
