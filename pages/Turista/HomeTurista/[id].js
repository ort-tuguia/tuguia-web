import { useRouter } from 'next/router'
import { getAllEvents } from "../../../dummy-data";
import EventList from "../../../components/events/EventList";
import EventsSearch from "../../../components/events/events-search";

function HomeTuristaId() {


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
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>
    )
}

export default HomeTuristaId