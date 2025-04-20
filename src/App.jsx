// import { Outlet } from 'react-router-dom'
import './App.css'
import Expense from './components/Expense'
import DisplayData from './components/DisplayData'
// import dummyData from './dummyData'
import { useEffect, useState } from 'react';
import UseLocalstorage from './Hooks/UseLocalstorage';

function App() {

  const key = "etracker";
  
  // const data = dummyData || [];

  // const data = useLocalstorge(expenseData)
  // const [expenseData, setexpenseData] = useState([])


  const [expenseData, setexpenseData] = UseLocalstorage(key,[])


  
  return (
    <div className="mt-6 max-w-6xl mx-auto">
        <h1 className="text-center text-blue-600 text-2xl mb-4">Expense Tracker</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-10 ">


        <Expense 
        
          setexpenseData={setexpenseData} />


        <DisplayData 
        setexpenseData= {setexpenseData}
          expenseData={expenseData} 
          keyvalue={key}
          />


      </div>

      {/* <Header /> */}
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
