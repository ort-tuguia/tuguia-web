import Button from "../ui/button";
import classes from "./event-search.module.css";
import { useRef } from "react";
function EventsSearch(props) {
  const RadioInputRef = useRef();
  const CategoriaInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const selectedKms = RadioInputRef.current.value;
    const selectedCategories = CategoriaInputRef.current.value;

    console.log(RadioInputRef.current.value)
    console.log(CategoriaInputRef.current.value)

    props.onSearch(selectedKms, selectedCategories)


  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="Radio">Radio</label>
          <select id="Radio" ref={RadioInputRef}>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="Categoria">Categoria</label>
          <select multiple id="Categoria" ref={CategoriaInputRef}  >
            <option value="1">Naturaleza</option>
            <option value="2">Museos</option>
            <option value="3">Trekking</option>
            <option value="4">Cabalgata</option>
            <option value="5">Rafting</option>
            <option value="6">Shows</option>
            <option value="7">Gastronomia</option>
            <option value="8">Arquitectura</option>
            <option value="9">Tour Casco Historico</option>
            <option value="10">Salida Noctura</option>
            <option value="11">Salida Diurna</option>
            <option value="12">Tour de Bares</option>
          </select>
        </div>
        <Button>Enviar</Button>
      </div>
    </form>
    
  );
}

export default EventsSearch;
