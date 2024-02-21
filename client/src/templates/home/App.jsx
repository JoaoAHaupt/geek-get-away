import { Searchbar } from '../../components/Searchbar'
import { Userbar } from '../../components/Userbar'

import { Logo } from '../../components/Logo'

import './App.css'

function App() {

  return (
    <>
      <header >
        <Logo></Logo>
  
        <Searchbar/>
        <Userbar/>
      </header>
    </>
  )
}

export default App
