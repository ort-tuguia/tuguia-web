import React, {useEffect, useState} from "react";
import bearer from "../../components/context/contextLogin";
import LayoutAdmin from "../../components/layout/layout-admin";
import {useRouter} from "next/router";
import apiCategories from "../api/apiCategories";
import {Modal} from "flowbite-react";
import StaticContent from "../../components/StaticContent";

function UpdateCategory(props) {
    const router = useRouter();
    const[id, setId] = useState();
    const[name, setName] = useState();
    const[description, setDescription] = useState();
    useEffect(() => {
        bearer = localStorage.getItem("token")
        console.log(props.category);
    },[])

    useEffect(() => {
        setName(props.category.name);
        setDescription(props.category.description);
    }, [props.category])

    // function ModificarCategoria(id, name, description) {
    //     bearer = localStorage.getItem("token")
    //     apiCategories.updateCategory(id,name,description,bearer).then(function (resp) {
    //           router.replace("/Categorias/HomeCategorias")
    //     }).catch(err =>{
    //         window.confirm(err.response.data.message)
    //         console.error(err)
    //     })
    // }

    return(
    <StaticContent>
        <Modal
            show={props.showModal}
            size="md"
            popup={true}
            onClose={()=> props.onClose()}
        >
            <Modal.Header />
            <Modal.Body>
                <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Modificar categoria</h3>
                    <form className="space-y-6">
                        <div class="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de la categoria</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Ingrese el nombre de la categoria" required/>
                        </div>
                        <div class="mb-6">
                            <label htmlFor="description"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion de la categoria</label>
                            <input type="text" id="description" name={description} value={description} onChange={(e) => setDescription(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   required/>
                        </div>
                        <button type="button" onClick={() => props.onSave(props.category.id, name, description)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar categoria
                        </button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    </StaticContent>
    )




}
export default UpdateCategory