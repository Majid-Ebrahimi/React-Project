import UserList from "../components/users/UserList";
import FavoritesContext from "../store/favorites-context";
import {useContext} from "react";

function FavoritesPage() {

    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <UserList users={favoritesCtx.favorites}/>
    }

    return (<section>
        <h1>My Favorites</h1>
        {content}
    </section>)
}

export default FavoritesPage