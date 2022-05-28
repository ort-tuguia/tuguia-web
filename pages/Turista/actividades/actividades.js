import apiServices from "../../api/apiActivities";
import {useEffect, useState} from "react";


function Actividades() {
    const [activities,setActivities]= useState("");

    useEffect(  () => {
        async function getActivities(){
            await apiServices.getActivities().then(response =>
                setActivities(response.data),
                    //console.log(response.data)

            )
        }
        getActivities();
    },[])


    return (
        <div>
            <p></p>
        </div>
    )
}

export default Actividades