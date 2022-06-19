import {useRouter} from 'next/router'
import LayoutAdmin from "../../../components/layout/layout-admin";
import React, {useEffect, useState} from "react";
import apiUsuarios from "../../api/apiUsuarios";
import bearer from "../../../components/context/contextLogin";
import {Button, Modal, Toast, Alert} from "flowbite-react";
import {HiOutlineExclamationCircle, HiCheck} from "react-icons/hi";
import StaticContent from "../../../components/StaticContent";
import ChangePassword from "./ChangePassword";

function HomeAdmin() {
    const [users, setUsers] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteUsername, setDeleteUsername] = useState("");
    const router = useRouter();
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [updateUserPassword, setUpdateUserPassword] = useState("");
    const [updateUserConfirmPassword, setUpdateUserConfirmPassword] = useState("");
    const [updateUserData, setUpdateUserData] = useState("");
    const [showToast, setShowToast] = useState(false);

    const loadData = async () => {
        try {
            bearer = localStorage.getItem("token");
            const response = await apiUsuarios.getUsuarios(bearer);
            setUsers(response.data);
        } catch (err) {
            window.confirm(err.response.data.message)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    function DeleteUser(username) {
        apiUsuarios.deleteUsuarios(username, bearer).then(function (response) {
            loadData();
        }).catch(err => {
            window.confirm(err.response.data.message)
            console.log("Token en HomeAdmin dentro de response error " + bearer)
            console.error(err)
        })
    }

    const updatePassword = async (username, password, confirmPassword) => {
        const bearer = localStorage.getItem("token");
        try {
            await apiUsuarios.updatePassword(username, password, confirmPassword, bearer);
            setShowChangePassword(false);
            loadData();
            window.confirm(`Contraseña de ${updateUserData} cambiada correctamente `)
        } catch (err) {
            window.confirm(err.response.data.message)
            console.error(err)
        }

    }


    return (<LayoutAdmin>
            <StaticContent>

                <Modal
                    show={showDeleteModal}
                    size="md"
                    popup={true}
                    onClose={() => {
                        setShowDeleteModal(false)
                    }}
                >
                    <Modal.Header/>
                    <Modal.Body  >
                        <div className="text-center">
                            <HiOutlineExclamationCircle
                                className="mx-auto mb-4 h-14 w-14 text-gray-900 dark:text-gray-50 "/>
                            <h3 className="mb-5 text-lg font-normal text-gray-900 dark:text-gray-50">
                                Estas seguro que quiere borrar el usuario {deleteUsername}?
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button
                                    color="failure"
                                    onClick={() => {
                                        DeleteUser(deleteUsername)
                                        setShowDeleteModal(false);
                                    }}
                                >
                                    Aceptar
                                </Button>
                                <Button
                                    color="gray"
                                    onClick={() => {
                                        setShowDeleteModal(false)
                                    }}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </StaticContent>
            <div class="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500 text-gray-200">
                    <thead class="text-xs text-gray-50 uppercase bg-gray-50 bg-gray-700 text-gray-400">
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
                        <tr key={user.username} class=" border-b bg-gray-800 border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-white whitespace-nowrap">
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
                                <button type="button" onClick={() => {
                                    setUpdateUserData(user.username);
                                    setShowChangePassword(true);
                                }}
                                        className="text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800">
                                    Cambiar Contraseña
                                </button>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button type="button" onClick={function () {
                                    setDeleteUsername(user.username);
                                    setShowDeleteModal(true);
                                }}
                                        className=" hover:text-white border focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-600 text-red-500 hover:text-white hover:bg-red-700 focus:ring-red-600">
                                    Eliminar
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
            <ChangePassword showModal={showChangePassword} username={updateUserData} password={updateUserPassword}
                            confirmPassword={updateUserConfirmPassword} onChangePassword={updatePassword}
                            onClose={() => setShowChangePassword(false)}/>

        </LayoutAdmin>

    )
}

export default HomeAdmin