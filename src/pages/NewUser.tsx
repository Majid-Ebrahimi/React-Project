import NewUserForm from "../components/users/NewUserForm";
import {useNavigate} from "react-router-dom";

function NewUserPage() {
    const history = useNavigate();
    function addUserHandler(userData: any) {
        fetch(
            'https://react-first-firebase-51f1d-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {'Content-Type': 'application/json'}
            }
        ).then(()=>{
            history("/");
        },() => {
            alert("Connection Lost!!!")
        })
    }

    return <section>
        <h1>New User Page</h1>
        <NewUserForm onAddUser={addUserHandler}/>
    </section>
}

export default NewUserPage