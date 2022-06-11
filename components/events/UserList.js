import EventItem from "./EventItem";
import UserItem from "./UserItem";
import classes from "./event-list.module.css"

function UserList(props) {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map((userItem) => (
                <UserItem
                    id={userItem.id}
                    userName={userItem.userName}
                    nombre={userItem.nombre}
                    apellido={userItem.apellido}
                    email={userItem.email}
                    rol={userItem.rol}
                />
            ))}
        </ul>
    );
}

export default UserList;
