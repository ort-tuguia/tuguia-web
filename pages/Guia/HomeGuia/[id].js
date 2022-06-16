import { useRouter } from 'next/router'
import { getAllEvents } from "../../../dummy-data";
import EventList from "../../../components/events/EventList";
import EventsAgregarServicio from "../../../components/events/events-agregarservicio";
import {useEffect, useState} from "react";
import Layout from "../../../components/layout/layout";

function HomeGuiaId() {
   const[token,setToken] = useState()
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
    },[])

    const router = useRouter();
    const guiaId = router.query.id
    const events = getAllEvents();
    function findEventsHandler(year, month) {
        const fullPath = `events/${year}/${month}`
        router.push(fullPath)
    }

    return (



        <div>
            Hola ID {guiaId} {token}
            {console.log(token)}
            <EventsAgregarServicio onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>

    )
}

export default HomeGuiaId