import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./components/pages/AboutPage";
import Catalog from "./components/pages/Catalog";
import StartPage from "./components/pages/StartPage";
import CategoryPage from "./components/pages/CategoryPage";

const App = () => {
    return (
        <div className="app_container">
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index path={'/'} element={<StartPage />} />
                    <Route path={'catalog'} element={<Catalog />} >
                        <Route path={':category'} element={<Catalog />} >
                            <Route index path={':item'} element={<CategoryPage />} />
                        </Route>
                    </Route>
                    <Route path={'info'} element={<AboutPage />} />
                </Route>
            </Routes>
        </div>

    )
};

export default App;