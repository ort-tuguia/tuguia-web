import apiServices from "../../api/apiServices";
import {useEffect, useState} from "react";


function Actividades() {

    useEffect(  () => {
        async function getActivities(){
            let res = await apiServices.getActivities();
            console.log("Aca hay algo: " + res.data[1])
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