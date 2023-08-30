import React from 'react';
import {Route, Routes} from "react-router-dom";
import NewUserPage from "./pages/NewUser";
import FavoritesPage from "./pages/Favorites";
import AllUsersPage from "./pages/AllUsers";
import Layout from "./components/layout/Layout";

function App() {
    return(
        <div>
            <Layout><Routes>
                <Route path="/" element={<AllUsersPage/>}/>
                <Route path="/new-User" element={<NewUserPage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Routes></Layout>
        </div>
    )
}

export default App;
