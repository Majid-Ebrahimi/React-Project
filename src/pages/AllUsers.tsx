// import DUMMY_USERS from "../data/User";
import UserList from "../components/users/UserList";
import {useEffect, useState} from "react";

interface User {
    user_id: number;
    profile_photo_url: string;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
}

function AllUsersPage(){
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadedUsers, setLoadedUsers] = useState<User[]>([])

    useEffect(() => {


        setIsLoading(true)
        fetch('https://react-first-firebase-51f1d-default-rtdb.firebaseio.com/users.json', {
                method: 'GET'
            },
        ).then(
            response => response.json()
        ).then(data => {
            const users: User[] = [];
            for (const key in data) {
                const user = {
                    id: key,
                    ...data[key]
                };
                users.push(user);
            }
            setIsLoading(false)
            setLoadedUsers(users)
        });
    }, []);


    if (isLoading) {
        return (
            <section>
                <main>Is Loading...</main>
            </section>
        )
    } else {
        return <section>
            <h1>All Users</h1>
            <UserList users={loadedUsers}/>
        </section>
    }
}

export default AllUsersPage