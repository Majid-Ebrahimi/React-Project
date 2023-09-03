import UserItem from "./UserItem";
import classes from "./UserList.module.css"

interface User {
    user_id: string;
    profile_photo_url: string;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
}

interface UserListProps {
    users: User[];
}

function UserList(props: UserListProps) {
    return (
        <ul className={classes.ul}>
            {props.users.map((user) => (
                <UserItem
                    user_id={user.user_id}
                    profile_photo_url={user.profile_photo_url}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    email={user.email}
                    date_of_birth={user.date_of_birth}
                />
            ),)}
        </ul>
    );
}

export default UserList;