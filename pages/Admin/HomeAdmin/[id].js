import { useRouter } from 'next/router'
import LayoutAdmin from "../../../components/layout/layout-admin";
import {useEffect, useState} from "react";
import apiUsuarios from "../../api/apiUsuarios";
import bearer from "../../../components/context/contextLogin";




function HomeAdminId() {
    const[users,setUsers]= useState([])
    useEffect(  () => {
        bearer = localStorage.getItem("token")
        console.log("Token en HomeAdmin " + bearer)
        apiUsuarios.getUsuarios(bearer).then(function (response) {
            setUsers(response.data)
            console.log("Token en HomeAdmin dentro de response " + bearer)
        }).catch(err =>{
             console.log("Token en HomeAdmin dentro de response error " + bearer)
             console.error(err)
         })

    },[])
    function DeleteUser(username) {
        apiUsuarios.deleteUsuarios(username, bearer).then(function (response) {
            console.log("Token en HomeAdmin dentro de response " + bearer)
            apiUsuarios.getUsuarios(bearer).then(function (response) {
                setUsers(response.data)
                console.log("Token en HomeAdmin dentro de response " + bearer)
            }).catch(err =>{
                console.log("Token en HomeAdmin dentro de response error " + bearer)
                console.error(err)
            })

        }   ).catch(err =>{
            console.log("Token en HomeAdmin dentro de response error " + bearer)
            console.error(err)})
        }


    const router = useRouter();

    return (
        <LayoutAdmin>
            {/*TODO PARA VER CODIGO FUNCIONANDO*/}
            {/*<pre>*/}
            {/*    {JSON.stringify(users, null, 2)}*/}
            {/*</pre>*/}
            <div class="relative overflow-x-auto shadow-md">
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
                            <span class="sr-only">Cambiar Contraseña</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span class="sr-only">Eliminar</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                    <tr key = {user.username} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                            <button type="button" onClick={() =>console.log("Modificar clave")}
                                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                Cambiar Contraseña
                            </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button type="button" onClick={function (){
                                if (window.confirm(`¿Estas seguro de eliminar el usuario : ${user.username}?`)) {
                                    DeleteUser(user.username)
                                }
                            }}
                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                Eliminar
                            </button>
                            {/*<a href={*/}
                            {/*    DeleteUser(user.username)*/}
                            {/*}*/}
                            {/*   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</a>*/}
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