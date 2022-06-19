import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import bearer from "../context/contextLogin";
import classes from './auth-form.module.css';
import apiLogin from '../../pages/api/apiLogin';
import Layout from "../layout/layout";

function AuthForm() {
  const usernameInputRef = useRef();
  const enteredPasswordRef = useRef();
  const router = useRouter();
    const [user,setUser] = useState()

  async function submitHandler(event) {
    event.preventDefault();


    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

      apiLogin.userLogin(enteredUsername, enteredPassword)
          .then(result => {
              if(result.data.role === "ADMIN"){
                  let bearer = result.headers['authorization']
                  console.log("Token en login " + bearer)

                  localStorage.setItem("token", bearer);
                  router.replace(`/Admin/HomeAdmin/HomeAdmin`)
              }else{
                  console.log("ERRORR")
                  window.confirm("Usuario no autorizado")
              }
          })
          .catch(err => {

              if(err.response.status == 404 || err.response.status == 400){
                  window.confirm("El nombre de usuario o la contraseña no son correctos ")
              }else{
                    window.confirm("Error en el servidor")
              }



          })

  }

  return (
      <Layout>
          <div className="h-full md:h-auto flex flex-1 p-4 content-center justify-center">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700 flex-1 max-w-md">
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Iniciar sesion</h3>
                <form className="space-y-6" action="#" onSubmit={submitHandler}>
                  <div>
                    <label htmlFor="username"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Usuario</label>
                    <input type="username" name="username" id="username"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           placeholder="Ingrese su usuario" required ref={usernameInputRef}/>
                  </div>
                  <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           required ref={enteredPasswordRef}/>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button>
                </form>
              </div>
            </div>
          </div>
      </Layout>
  );
}

export default AuthForm;
















