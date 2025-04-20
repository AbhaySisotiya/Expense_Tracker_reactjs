import { useState } from "react"


const UseFilterDataHook = (OriginalData,callback) => {

    const [query,setquery] = useState("")    

    const filterData = OriginalData.filter((e) => {
        return callback(e).includes(query)
    })

    return [filterData,setquery]
}

export default UseFilterDataHook;