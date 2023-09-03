import Card from "../ui/Card";
import classes from "./UserItem.module.css"
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function UserItem(props:any) {

    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.user_id);
    
    function toggleFavoriteStatusHandler(){
        if (itemIsFavorite){
            favoritesCtx.removeFavorite(props.user_id)
        }else {
            favoritesCtx.addFavorite({
                user_id: props.user_id,
                profile_photo_url: props.profile_photo_url,
                first_name: props.first_name,
                last_name: props.last_name,
                email: props.email,
                date_of_birth: props.date_of_birth
            })
        }
    }

    return (<Card>
            <div className={classes.div}>
                <img src={props.profile_photo_url} alt={props.first_name + ' ' + props.last_name}/>
                <div className={classes.div2}>
                    <h4>{props.first_name} {props.last_name}</h4>
                    <p>Email Address: <b>{props.email}</b></p>
                    <p>Birth Date: <b>{props.date_of_birth}</b></p>
                    <div className={classes.actions}>
                        <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'to Favorites'}</button>
                    </div>
                </div>
            </div>
        </Card>);
}

export default UserItem;