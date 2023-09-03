import classes from "./NewUserForm.module.css";
import Card from "../ui/Card";
import React, {useRef} from "react";


function NewUserForm(props: any) {

    const firstNameInputRef = useRef<HTMLInputElement>(null!);
    const lastNameInputRef = useRef<HTMLInputElement>(null!);
    const emailInputRef = useRef<HTMLInputElement>(null!);
    const imageURLInputRef = useRef<HTMLInputElement>(null!);
    const birthDateInputRef = useRef<HTMLInputElement>(null!);

    function submitHandler(event: any) {
        event.preventDefault();

        const firstNameEntered = firstNameInputRef.current.value;
        const lastNameEntered = lastNameInputRef.current.value;
        const emailEntered = emailInputRef.current.value;
        const imageUrlEntered = imageURLInputRef.current.value;
        const birthDateEntered = birthDateInputRef.current.value;

        const userData = {
            first_name: firstNameEntered,
            last_name: lastNameEntered,
            email: emailEntered,
            profile_photo_url: imageUrlEntered,
            date_of_birth: birthDateEntered,
        }

        props.onAddUser(userData);
    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor={"FirstName"}>First Name</label>
                <input type={"text"} required={true} id={"FirstName"} ref={firstNameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor={"LastName"}>Last Name</label>
                <input type={"text"} required={true} id={"LastName"} ref={lastNameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor={"Email"}>Email Address</label>
                <input type={"email"} required={true} id={"Email"} ref={emailInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor={"Image"}>Image URL</label>
                <input type={"url"} required={false} id={"Image"} ref={imageURLInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor={"BirthDate"}>Birth Date</label>
                <input type={"date"} required={false} id={"BirthDate"} ref={birthDateInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add User</button>
            </div>
        </form>
    </Card>);
}

export default NewUserForm
