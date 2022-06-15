import Link from "next/link";
import classes from "./main-header.module.css";
function AdminHeader() {
    return (



        <header>
            <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg
                        className="fill-current h-8 w-8 mr-2"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                    <span className="font-semibold text-xl tracking-tight">TuGuia Admin</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a
                            href="/Turista/HomeTurista/1"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Buscar
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Categorias
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                        >
                            Cambios de Passwords
                        </a>
                    </div>
                    <div>
                        <a
                            href="/auth"
                            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
        </header>

        /*     <header>
        
        <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <svg
                    className="fill-current h-8 w-8 mr-2"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  <span className="font-semibold text-xl tracking-tight">TuGuia Guia</span>
                </div>
                <div className="block lg:hidden">
                  <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                      className="fill-current h-3 w-3"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                  <div className="text-sm lg:flex-grow">
                    <a
                      href="#responsive-header"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                      <Link href="/Guia/HomeGuia/1">Mis Servicios</Link>
                    </a>
                    <a
                      href="#responsive-header"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                       <Link href="/Guia/AgregarServicio/1">Agregar Servicio</Link>
                    </a>
                    <a
                      href="#responsive-header"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                    >
                      Reservas
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    >
                       <Link href="/auth">Login</Link> 
                    </a>
                  </div>
                </div>
              </nav>
        
            </header> */




    );
}

export default AdminHeader;