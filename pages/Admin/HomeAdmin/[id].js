import { useRouter } from 'next/router'
import LayoutAdmin from "../../../components/layout/layout-admin";
import {useEffect, useState} from "react";
import apiUsuarios from "../../api/apiUsuarios";
import bearer from "../../../components/context/contextLogin";

function HomeAdminId() {
    const[users,setUsers]= useState([])
    useEffect(  () => {
        bearer = localStorage.getItem("token")
        //setToken(localStorage.getItem("bearer"))
        console.log("Token en HomeAdmin " + bearer)
        apiUsuarios.getUsuarios(bearer).then(function (response) {
            setUsers(response.data)
            console.log("Token en HomeAdmin dentro de response " + bearer)
        }).catch(err =>{
             console.log("Token en HomeAdmin dentro de response error " + bearer)
             console.error(err)
         })

    },[])


    const router = useRouter();
    // const guiaId = router.query.id


    // function findEventsHandler(year, month) {
    //     const fullPath = `events/${year}/${month}`
    //     router.push(fullPath)
    // }


    return (
        <LayoutAdmin>
            {/*TODO PARA VER CODIGO FUNCIONANDO*/}
            {/*<pre>*/}
            {/*    {JSON.stringify(users, null, 2)}*/}
            {/*</pre>*/}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Usuario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apellido
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Correo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {user.username}
                        </th>
                        <td className="px-6 py-4">
                            {user.firstName}
                        </td>
                        <td className="px-6 py-4">
                            {user.lastName}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </LayoutAdmin>
    )
}

export default HomeAdminId