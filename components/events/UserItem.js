import Link from "next/link";
import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function UserItem(props) {
    const { userName, nombre, apellido, email, id, rol } = props;


    const exploreLink = `/usuarios/${id}`;
    return (
        <li className={classes.item}>
            {/* <img src={"/" + image} alt={title} /> */}

            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>UserName: {userName}</h2>
                </div>
                <div className={classes.summary}>
                    <h2>Nombre: {nombre}</h2>
                </div>
                <div className={classes.summary}>
                    <h2>Apellido: {apellido}</h2>
                </div>
                <div className={classes.summary}>
                    <h2>Email: {email}</h2>
                </div>
                <div className={classes.summary}>
                    <h2>Rol: {rol}</h2>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Eliminar</span>
                    </Button>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Reset Password</span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default UserItem;
