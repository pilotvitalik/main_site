import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ReverseNavigate(){
    const navigation = useSelector(state => state.main.navigate);
    const location = useLocation();
    const activeUrl = location.pathname;

    const listNavigate = navigation.map(item =>
        (item.url === activeUrl) ? item.list_pages : ''
    );

    const reverceUrl = listNavigate[0].map((page, index) =>
        (index < listNavigate[0].length - 1) ?
            <React.Fragment key={page.id}>
                <Link data-id={index} to={page.url}>{page.name}</Link><span>/</span>
            </React.Fragment> :
            <Link key={page.id} to={page.url} data-id={index}>{page.name}</Link>
    )

    return(
        <nav>
            {reverceUrl}
        </nav>
    )
}

export default ReverseNavigate;