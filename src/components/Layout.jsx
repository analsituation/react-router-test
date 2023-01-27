import React, {useEffect} from 'react';
import {NavLink, Outlet, useParams, useLocation} from "react-router-dom";

const Layout = () => {

    const params = useParams()
    const loc = useLocation()
    useEffect(() => {
        console.log(params)
        console.log(loc)
    }, [])

    return (
        <div className="container">
            <header className="header_container">
                <div className="header_navigation">
                    <div className="navigation_block">
                        <NavLink to={'/'}>Main page</NavLink>
                    </div>
                    <div className="navigation_block">
                        <NavLink to={'catalog'}>Catalog</NavLink>
                    </div>
                    <div className="navigation_block">
                        <NavLink to={'info'}>Information</NavLink>
                    </div>
                </div>
                <div className="userinfo_block">
                    <img className="userphoto" src="https://avatars.githubusercontent.com/u/97411966?v=4" alt=""/>
                    <div className="username">Analsituation</div>
                </div>
            </header>
            <section className="main_section">
                <Outlet />
            </section>
        </div>
    );
};

export default Layout;