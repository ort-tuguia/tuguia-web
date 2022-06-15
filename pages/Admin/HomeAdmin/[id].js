import { useRouter } from 'next/router'
import LayoutAdmin from "../../../components/layout/layout-admin";
import {useEffect, useState} from "react";
import apiUsuarios from "../../api/apiUsuarios";


function HomeAdminId() {
    const[token,setToken] = useState()
    const[users,setUsers]= useState()
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
        console.log("Token en HomeAdmin " + token)
        apiUsuarios.getUsuarios(token).then(result=>{
            let response = result.data
            setUsers(response)
            console.log (users)
        }
        ).catch(err =>{
            console.error(err)
        })

    },[])


    const router = useRouter();
    const guiaId = router.query.id


    function findEventsHandler(year, month) {
        const fullPath = `events/${year}/${month}`
        router.push(fullPath)
    }


    return (
        <LayoutAdmin>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </LayoutAdmin>
    )
}

export default HomeAdminId