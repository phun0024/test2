import Header from './Header/Header'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import Contact from './Contact/Contact'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Experience from './Experience/Experience'

function Home () {

  return (
    <>
      <div className='container'>
          <Header></Header>
          <Nav></Nav>
          <About></About>
          <Experience></Experience>
          <Portfolio></Portfolio>
          <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
