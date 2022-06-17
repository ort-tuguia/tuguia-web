import Link from "next/link";
import classes from "./main-header.module.css";
import { useRouter } from 'next/router';
function AdminHeader() {
    const router = useRouter();
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">
                        <a href="/Admin/HomeAdmin/HomeAdmin">
                           TuGuia Admin
                            </a>
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                             <a href="/Categorias/HomeCategorias"
                            onClick={() => router.push("/Categorias/HomeCategorias")}
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Categorias
                        </a>
                        <a
                            href="/Admin/HomeAdmin/HomeAdmin"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Usuarios
                        </a>
                    </div>
                    <div>
                        <button type="button"
                                onClick={ () => {localStorage.removeItem("token")
                                    router.replace(`/auth`)}}
                                className="text-gray-50 hover:text-white border border-gray-50 hover:bg-gray-50 focus:ring-4
                                 focus:outline-none focus:ring-gray-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                  mr-2 mb-2 dark:border-gray-50 dark:text-gray-50 dark:hover:text-gray-900 dark:hover:bg-gray-50
                                  dark:focus:ring-green-800">Logout
                        </button>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default AdminHeader;
