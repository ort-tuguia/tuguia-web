import { useRef } from "react";

import Card from '../../../components/ui/Card';
import classes from '../../../components/events/NewMeetup.module.css'

function NewMeetupForm(props) {
    const titleInputRef = useRef(); // good for reading values
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);

        console.log(meetupData)
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="Servicio">Servicio</label>
                    <input type="text" required id="Servicio" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="Imagen">Imagen url</label>
                    <input type="url" required id="Imagen" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="Ubicacion">Ubicacion</label>
                    <input type="text" required id="Ubicacion" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="Descripcion">Descripcion</label>
                    <textarea
                        type="Descripcion"
                        required
                        rows="5"
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.action}>
                    <button>Crear Servicio</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;