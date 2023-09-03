import {createContext, useState} from "react";


interface FavoritesContextTypes {
    favorites: User[],
    totalFavorites: number,
    addFavorite: any,
    removeFavorite: any,
    itemIsFavorite: any,
}

interface User {
    user_id: string;
    profile_photo_url: string;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
}


const FavoritesContext = createContext<FavoritesContextTypes>({
    favorites: [],
    totalFavorites: 0,
    addFavorite: ()=>{},
    removeFavorite: ()=>{},
    itemIsFavorite: ()=>{},
},)

export function FavoritesContextProvider(props: any) {

    const [userFavorites, setUserFavorites] = useState<any[]>([]);

    function addFavoriteHandler(favoriteUser: User) {
        setUserFavorites((prevUserFavorites: User[]) => {
            return prevUserFavorites.concat(favoriteUser)
        })
    }

    function removeFavoriteHandler(userId: string) {
        setUserFavorites((prevUserFavorites: User[]) => {
            return prevUserFavorites.filter(user => user.user_id !== userId)
        })
    }

    function itemIsFavoriteHandler(userId: string) {
        return userFavorites.some(user => user.user_id === userId)
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    }
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext