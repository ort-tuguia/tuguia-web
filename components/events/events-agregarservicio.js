import Button from "../ui/button";
import classes from "./event-search.module.css";
import { useRef } from "react";
function EventsAgregarServicio(props) {
  const RadioInputRef = useRef();
  const CategoriaInputRef = useRef();
  const unavariable = 10;

  function submitHandler(event) {
    event.preventDefault();
    const selectedYear = RadioInputRef.current.value;
    const selectedMonth = CategoriaInputRef.current.value;

    console.log(RadioInputRef.current.value)

    props.onSearch(selectedYear, selectedMonth)


  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
      <Button>Agregar Servicio</Button>
    </div>
    </form >
  );
}

export default EventsAgregarServicio;
