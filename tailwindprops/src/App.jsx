
import './App.css'
import Card from './components/Card'

function App() {
  let obj={
    userName:"dear",
    age:23
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-2 rounded-xl mb-4'>Tailwind Test</h1>
     <Card userName="Drishti" btnText="See Profile" />
     <Card userName="Sargun Mehta" someObj={obj} />
    </>
  )
}

export default App
