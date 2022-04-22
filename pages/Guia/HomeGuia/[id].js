import { useRouter } from 'next/router'
import { getAllEvents } from "../../../dummy-data";
import EventList from "../../../components/events/EventList";
import EventsAgregarServicio from "../../../components/events/events-agregarservicio";

function HomeGuiaId() {


    const router = useRouter();
    const guiaId = router.query.id
    const events = getAllEvents();
    function findEventsHandler(year, month) {
        const fullPath = `events/${year}/${month}`
        router.push(fullPath)
    }
    return (

        <div>
            Hola ID {guiaId}
            <EventsAgregarServicio onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>
    )
}

export default HomeGuiaId