import React, {createElement, useEffect, useState} from "react";
import bearer from "../../components/context/contextLogin";
import apiCategories from "../api/apiCategories";
import LayoutAdmin from "../../components/layout/layout-admin";

function HomeCategorias(){
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        bearer = localStorage.getItem("token")
        console.log("Token en HomeCategorias " + bearer)
        apiCategories.getCategories(bearer).then(function (response) {
            setCategories(response.data)
        }).catch(err =>{
            console.error(err)
        })

    },[])
    function CrearLaCat(name,description) {
        bearer = localStorage.getItem("token")

        console.log("Nombre de la categoria: " + name)
        console.log("Descripcion de la categoria: " + description)
        apiCategories.createCategory(name,description,bearer).then(function (resp) {
            console.log("Response PUT "+resp)
            apiCategories.getCategories(bearer).then(function (response) {
                console.log("Response GET "+response)
                setCategories(response.data)
            }).catch(err =>{
                console.error(err)
            })
        }).catch(err =>{
            console.error(err)
        })
    }
    function DeleteCategory(id) {
        apiCategories.deleteCategory(id, bearer).then(function (response) {
            console.log("Token en HomeCategorias dentro de response " + bearer)
            apiCategories.getCategories(bearer).then(function (response) {
                setCategories(response.data)
                console.log("Token en HomeCategorias dentro de response " + bearer)
            }).catch(err =>{
                console.log("Token en HomeCategorias dentro de response error " + bearer)
                console.error(err)
            })
        }   ).catch(err =>{
            console.log("Token en HomeAdmin dentro de response error " + bearer)
            console.error(err)})

    }
    return(
        <LayoutAdmin>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4">
                    <button
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        onClick={()=>{
                            document.getElementById("authentication-modal").style.display = "block";
                        }}
                        >
                        Agregar categoria
                    </button>
                </div>
                <div id="authentication-modal" tabIndex="-1" aria-hidden="true"
                     className="hidden overflow-y-auto overflow-x-hidden fixed top-1 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button"
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                    data-modal-toggle="authentication-modal"
                                    onClick={()=>{
                                        console.log("Click en boton")
                                        document.getElementById("authentication-modal").style.display = "none";
                                    }}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>

                            </button>
                            <div className="py-6 px-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Crear nueva categoria</h3>
                                <form className="space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de la categoria</label>
                                        <input type="text" name="name" id="name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="Ingrese nombre de la categoria" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="description"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion de la categoria</label>
                                        <input type="text" name="description" id="description" placeholder="Ingrese descripcion de la categoria"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                    </div>
                                    <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={()=>{
                                         var nameCategory = document.getElementById("name").value
                                        var descriptionCategory = document.getElementById("description").value

                                        CrearLaCat(nameCategory,descriptionCategory)
                                    }}
                                    >Crear categoria</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
            </div>
























                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Descripcion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span class="sr-only">Modificar</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span class="sr-only">Eliminar</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map(category => (
                        <tr key = {category.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {category.name}
                            </th>
                            <td className="px-6 py-4">
                                {category.description}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button type="button" onClick={() =>console.log("Modificar")}
                                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                    Modificar
                                </button>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button type="button" onClick={function (){
                                    if (window.confirm(`¿Estas seguro de eliminar el usuario : ${category.name}?`)) {
                                        DeleteCategory(category.id)
                                    }
                                }}
                                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

        </LayoutAdmin>
    )
}
export default HomeCategorias;