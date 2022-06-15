import { Fragment } from "react";
import MainHeader from "./main-header";
import AdminHeader from "./admin-header";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader/>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
