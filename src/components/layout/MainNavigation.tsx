import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigationBar() {
    return <header className={classes.header}>
        <div className={classes.logo}>
            Navigation Menu
        </div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to={'/'}>All Users</Link>
                </li>
                <li>
                    <Link to={'/new-User'}>New User</Link>
                </li>
                <li>
                    <Link to={'/favorites'}>Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigationBar