import { useEffect, useState } from "react"



const UseLocalstorage = (key,initialdata) => {


    const [expenseData, setexpenseData] = useState(initialdata)
    

    useEffect(()=>{        
        const exit = JSON.parse(localStorage.getItem(key))
        if(exit && exit.length > 0){
            setexpenseData(exit)
        }else{
            localStorage.setItem(key,JSON.stringify(expenseData))
        }
      },[])


      
    useEffect(()=>{
        if(localStorage.getItem(key) !== JSON.stringify(expenseData)){
            localStorage.setItem(key,JSON.stringify(expenseData))
        }
      },[expenseData])


      return [expenseData,setexpenseData]

}

export default UseLocalstorage