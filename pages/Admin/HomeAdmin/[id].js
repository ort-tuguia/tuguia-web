import { useRouter } from 'next/router'
import { getAllEvents } from "../../../dummy-data";
import UserList from '../../../components/events/UserList';
import { getUsuarios } from '../../api/apiUsuarios';
import { getActivities } from '../../api/apiActivities'
import { getAllUsers } from '../../../dummy-users'
import apiActivities from '../../api/apiActivities';

function HomeAdminId() {



    const router = useRouter();
    const guiaId = router.query.id

    const usuario = getAllUsers();

    const activities = apiActivities.getActivities("Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0dXJpc3RhIiwiZXhwIjoxNjU0OTg3MTk2fQ.mYce8ID_XhYkRdl1tAR54C9EBxhqXqs4qEtDjkGA4pA");

    console.log(activities)

    function findEventsHandler(year, month) {
        const fullPath = `events/${year}/${month}`
        router.push(fullPath)
    }


    return (

        <div>
            Hola ID {guiaId}
            <UserList items={usuario} />
        </div>
    )
}

export default HomeAdminId