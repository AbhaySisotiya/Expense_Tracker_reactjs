import React, { useEffect, useState } from 'react'
import Input from './ui/Input'
import SelectMenu from './ui/SelectMenu'

function Expense({setexpenseData ,category}) {

    const [data,setdata] = useState({
        title:'',
        category:"",
        amount:""
    })

    const [errors,seterrors] = useState({})
    const [iserror,setiserror] = useState(false)


    
// this is used for validation purpose

    const validatecontrols = (formdata) => {

        const allErrors = {}

        if(formdata.title == ""){
            allErrors["title"] = "title must be required"
        }
        
        if(formdata.category == ""){
            allErrors["category"] = "category must be required"
        }


        if(Number(formdata.amount) == 0){
            allErrors["amount"] = "amount must be required"
        }

        seterrors(allErrors)
        return allErrors;
    }


 // this function is used to handle submit event

    const HandleSubmit = (e) => {
        e.preventDefault();

        const errordata = validatecontrols(data)
        
       
        if(Object.keys(errordata).length > 0) {
            setiserror(true)
            return
        }
            setexpenseData((prev) => [...prev,data]);
            setdata({title:"",category:"",amount:""})
    }

// this function is used to set value in all inupt values

    const HandleValues = (e) => {
        setdata((prev) => ({
            ...prev,
            id:crypto.randomUUID(),
            [e.target.name]:e.target.value
        }))

        
        seterrors({})

    }


    return (
        <form className='flex flex-col gap-2.5' onSubmit={HandleSubmit}>

            <Input 
                id={"title"}
                type={"text"}
                name={"title"}
                placeholder={"Enter Title"}
                value={data.title}
                onChange={HandleValues}
                iserror={iserror}
                error={errors.title}
            />

            <SelectMenu
                id={"category"}
                name={"category"}
                value={data.category}
                onChange={HandleValues}
                options={category}
                defaultOption={"Select Category"}
                iserror={iserror}
                error={errors.category}
            ></SelectMenu>

            <Input 
                id={"amount"}
                type={"number"}
                name={"amount"}
                placeholder={"Enter amount"}
                value={data.amount}
                onChange={HandleValues}
                iserror={iserror}
                error={errors.amount}
            />

            <button
                className="btn btn-primary focus:outline-0 rounded-2xl p-3 w-full"

            >Submit</button>
        </form>
    )
}

export default Expense
