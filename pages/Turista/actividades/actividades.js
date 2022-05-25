import apiServices from "../../api/apiServices";
import {useEffect, useState} from "react";


function Actividades() {
    const [activities,setActivities]= useState("");

    useEffect(  () => {
        async function getActivities(){
            await apiServices.getActivities().then(response => console.log(response.data))
        }
        getActivities();
    },[])


    return (
        <div>
            <p>Hola</p>
        </div>
    )
}

export default Actividades