import Footer from './components/Footer'
import Header from './components/Header'
import Product from './components/Product'
import {Outlet} from "react-router-dom"
import useTheme from './hooks/useTheme'


const App = () => {

  useTheme();

  return (
    <>
      <Header/>
      <main className=' min-h-lvh'>
        <div className='container mx-auto px-4'>
          
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </>
  )
}


export default App