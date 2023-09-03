import MainNavigationBar from "./MainNavigation";
import classes from "./Layout.module.css"

function Layout(props: any) {
    return <div>
        <MainNavigationBar/>
        <main className={classes.main}>{props.children}</main>
    </div>
}

export default Layout