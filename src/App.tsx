import './App.css'
import HomeBar from './components/homeBar/HomeBar'
import Home from './components/pages/Home'
import SearchBar from './components/searchBar/SearchBar'

function App() {

  return (
    <div className='flex flex-col h-screen bg-gradient-to-tr from-[#0c0c13] from-0% to-[#19163b] to-100%'>
      <SearchBar/>
      <div className='flex flex-row h-full'>
        <HomeBar/>
        <Home/>
      </div>
    </div>
  )
}

export default App
