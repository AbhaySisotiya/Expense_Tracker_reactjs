import React, { useEffect, useState } from 'react'
import SelectMenu from './ui/SelectMenu';
import UseFilterDataHook from '../Hooks/UseFilterDataHook';
import { data } from 'react-router-dom';

function DisplayData({ expenseData, setexpenseData, keyvalue ,category}) {

    const [Filterdata, setQuery] = UseFilterDataHook(expenseData, (data) => data.category)

    const [sortcallback, setsortcallback] = useState(() => { })

    let Total_Amount = 0
    Filterdata.forEach(e => {
        Total_Amount += JSON.parse(e.amount)
    });



    const deleteExpense = (id) => {

        let data = JSON.parse(localStorage.getItem(keyvalue))

        data = data.filter((e) => e.id !== id)
        localStorage.setItem(keyvalue, JSON.stringify(data))
        setexpenseData(data)
    }

    return (
        <div className="overflow-x-auto w-full">

            <div className="w-full overflow-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-700 text-white">
                            <th className="p-4 text-left">Title</th>
                            <th className="text-left">
                                <SelectMenu
                                    id={"category"}
                                    name={"category"}
                                    options={category}
                                    defaultOption={"All Category"}
                                    onChange={(e) => setQuery(e.target.value)}
                                ></SelectMenu>

                            </th>
                            <th className="">
                                <div className='flex flex-col gap-1 items-center align-middle justify-center h-full'>
                                    <p>Amount</p>
                                    <div className='flex gap-2.5 lg:gap-2'>

                                        <button
                                            onClick={() => setsortcallback(() => (a, b) => a.amount - b.amount)}
                                            className='btn px-2 py-1 h-4 pt-3 active:bg-gray-950'>
                                            <i className="fa-solid fa-sort-up"></i>
                                        </button>


                                        <button
                                            onClick={() => setsortcallback(() => (a, b) => b.amount - a.amount)}
                                            className='btn px-2 py-1 h-4 pb-3 active:bg-gray-950'>
                                            <i className="fa-solid fa-sort-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <th className='p-2 bg-red-400'><i className="fa-solid fa-trash"></i></th>
                        </tr>
                    </thead>
                    {Filterdata.length > 0 ? (

                        <tbody>
                            {Filterdata
                                .sort(sortcallback)
                                .map((data) => (
                                    <tr className="border-b border-gray-300" key={data.id}>
                                        <td className="p-4 truncate">{data.title}</td>
                                        <td className="p-4 truncate">{data.category}</td>
                                        <td className="p-4 truncate">₹ {Number(data.amount).toLocaleString("en-In")}</td>
                                        <td className='p-2 pl-5.5'>
                                            <button
                                                onClick={() => deleteExpense(data.id)}
                                                className='btn  h-7  active:bg-gray-950'>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>

                                    </tr>
                                ))}

                            <tr className="border-t border-gray-500">
                                <td className="p-4 font-bold">Total Amount:</td>
                                <td></td>
                                <td className="p-4 font-bold" colSpan={2}>₹ {Total_Amount ? Total_Amount.toLocaleString("en-In") : 0}</td>
                            </tr>
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan="3" className="text-center py-4">No Data Found</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>

        </div>
    );
}

export default DisplayData
