import { Fragment } from "react";
import MainHeader from "./main-header";
import AdminHeader from "./admin-header";

function LayoutAdmin(props) {
    return (
        <Fragment>
            <AdminHeader/>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default LayoutAdmin;