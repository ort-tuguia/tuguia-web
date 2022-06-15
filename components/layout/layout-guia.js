import { Fragment } from "react";
import MainHeader from "./main-header";

function LayoutGuia(props) {
    return (
        <Fragment>
            <GuiaHeader/>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;
