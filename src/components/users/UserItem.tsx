import Card from "../ui/Card";
import classes from "./UserItem.module.css"

function UserItem(props: {
    profile_photo_url: string;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
}) {

    return (
        <Card>
            <div className={classes.div}>
                <img src={props.profile_photo_url} alt={props.first_name + ' ' + props.last_name}/>
                <div className={classes.div2}>
                    <h3>{props.first_name} {props.last_name}</h3>
                    <p>Email Address: <b>{props.email}</b></p>
                    <p>Birth Date: <b>{props.date_of_birth}</b></p>
                    <div className={classes.actions}>
                        <button>Add to Favorites</button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default UserItem;