import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import { useState } from "react"



function App() {
  const loadedCoffees =useLoaderData()
  const [coffees,setCoffees]=useState(loadedCoffees)
   console.log(loadedCoffees)

  return (
    <>
     
      <h1 className='text-6xl text-purple-600 text-center py-10'>Hot Cold Coffees :{coffees.length}</h1>
    
      <div className="grid md:grid-cols-2 gap-5 p-5">
        {
          coffees.map(coffee=>
          <CoffeeCard key={coffee._id}
            
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
