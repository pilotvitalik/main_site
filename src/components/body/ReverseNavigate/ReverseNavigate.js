import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ReverseNavigate(){
    const navigation = useSelector(state => state.main.navigate);
    const location = useLocation();
    const arrPath = location.pathname.split('/');
    const listNavigate = arrPath.map((item, index, arrPath) => 
        createLinks(item, index, arrPath)
    );

    function createLinks(item, index, arrPath){
        return navigation.map(page =>
            (index < arrPath.length - 1) ?
                (page.key_word === item) ? 
                    <React.Fragment key={page.id}>
                        <Link to={page.url}>{page.name_url}</Link><span>/</span>
                    </React.Fragment> : '' :
                    (page.key_word === item) ?
                    <Link key={page.id} data-id={item} to={page.url}>{page.name_url}</Link>
                    : ''
        )
    }

    return(
        <nav>
            {listNavigate}
        </nav>
    )
}

export default ReverseNavigate;