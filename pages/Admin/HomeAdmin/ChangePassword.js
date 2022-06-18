import React, {useEffect, useState} from "react";
import StaticContent from "../../../components/StaticContent";
import {Modal} from "flowbite-react";

function ChangePassword(props){
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    useEffect(() => {
        setPassword(props.password);
    },[props.password])
    useEffect(() => {
        setConfirmPassword(props.confirmPassword);
    },[props.confirmPassword])
    useEffect(()=> {
        setPassword("");
        setConfirmPassword("");
    }, [props.showModal]);
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
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Cambiar Contraseña de {props.username}</h3>
                            <form className="space-y-6">
                                <div class="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contraseña</label>
                                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Ingrese la contraseña" required/>
                                    </div>
                                <div class="mb-6">
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmar Contraseña</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Confirme la contraseña" required/>
                                </div>
                                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() =>{

                                        props.onChangePassword(props.username,password,confirmPassword)

                                }}>
                                    Cambiar Contraseña
                                </button>
                            </form>
                    </div>
                </Modal.Body>
            </Modal>
        </StaticContent>
    )
}
export default ChangePassword;