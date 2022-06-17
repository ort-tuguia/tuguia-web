import React, {createElement, useEffect, useState} from "react";
import bearer from "../../components/context/contextLogin";
import apiCategories from "../api/apiCategories";
import LayoutAdmin from "../../components/layout/layout-admin";
import {useRouter} from "next/router";
import { Modal, Label, TextInput, Checkbox, Button  } from "flowbite-react";
import StaticContent from "../../components/StaticContent";
import {HiOutlineExclamationCircle} from "react-icons/hi";
import UpdateCategory from "./UpdateCategory";

function HomeCategorias(){
    const [categories,setCategories] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [showDeleteModal,setShowDeleteModal] = useState(false);
    const [deleteCategoryId,setDeleteCategoryId] = useState(0);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [updateCategoryData,setUpdateCategoryData] = useState({});
    const [showUpdateCategory,setShowUpdateCategory] = useState(false);

    const router = useRouter();

    const loadData = async () => {
        const bearer = localStorage.getItem("token");
        try {
            const response = await apiCategories.getCategories(bearer);
            setCategories(response.data);
        } catch (err) {
            window.confirm(err.response.data.message)
            console.error(err)
        }

    };

    useEffect(()=>{
        loadData();
    },[]);

    useEffect(()=> {
        setName("");
        setDescription("");
    }, [showModal]);

    const updateCategory = async (id, name, description) => {
        const bearer = localStorage.getItem("token");
        try {
            await apiCategories.updateCategory(id, name, description, bearer);
            setShowUpdateCategory(false);
            loadData();
        } catch (err) {
            window.confirm(err.response.data.message);
            console.error(err);
        }
    }

    function CrearLaCat() {
        bearer = localStorage.getItem("token")
        apiCategories.createCategory(name,description,bearer).then(function (resp) {
                //router.reload()
             loadData();
        }).catch(err =>{
             window.confirm(err.response.data.message)
            console.error(err)
        })
    }
    function DeleteCategory(id) {
        apiCategories.deleteCategory(id, bearer).then(function (response) {
            loadData();
        }   ).catch(err =>{
            console.log("Token en HomeAdmin dentro de response error " + bearer)
            window.confirm(err.response.data.message)
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
                            setShowModal(true);
                        }}
                        >
                        Agregar categoria
                    </button>
                </div>
                <StaticContent>
                    <Modal
                        show={showDeleteModal}
                        size="md"
                        popup={true}
                        onClose={()=>{setShowDeleteModal(false)}}
                    >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="text-center">
                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Estas seguro que quiere borrar la categoria {categories.find(t => t.id == deleteCategoryId)?.name}?
                                </h3>
                                <div className="flex justify-center gap-4">
                                    <Button
                                        color="failure"
                                        onClick={()=>{
                                            DeleteCategory(deleteCategoryId)
                                            setShowDeleteModal(false);
                                        }}
                                    >
                                        Aceptar
                                    </Button>
                                    <Button
                                        color="gray"
                                        onClick={()=>{setShowDeleteModal(false)}}
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <Modal
                        show={showModal}
                        size="md"
                        popup={true}
                        onClose={()=>{ setShowModal(false) }}
                    >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="py-6 px-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Crear nueva categoria</h3>
                                <form className="space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de la categoria</label>
                                        <input type="text" name="name" id="name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="Ingrese nombre de la categoria" required
                                               value={name} onChange={(e)=>{setName(e.target.value)}}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion de la categoria</label>
                                        <input type="text" name="description" id="description" placeholder="Ingrese descripcion de la categoria"
                                               value={description} onChange={(e)=>{setDescription(e.target.value)}}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                    </div>
                                    <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            onClick={()=>{
                                                CrearLaCat()
                                                setShowModal(false);
                                            }}
                                    >Crear categoria</button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </StaticContent>
                <UpdateCategory showModal={showUpdateCategory} category={updateCategoryData} onSave={updateCategory} onClose={() => setShowUpdateCategory(false)} />
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
                                <button type="button" onClick={() => {
                                    //router.push( {pathname:`/Categorias/UpdateCategory/`,query:{id:category.id,name:category.name,description:category.description}})
                                    //ModificarCategoria(category.id,category.name,category.description)
                                    setUpdateCategoryData(category);
                                    setShowUpdateCategory(true);
                                }}
                                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                    Modificar
                                </button>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button type="button" onClick={function (){
                                    setDeleteCategoryId(category.id);
                                    setShowDeleteModal(true);
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