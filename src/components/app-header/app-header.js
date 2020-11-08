import React from 'react';

import './app-header.css';



const AppHeader = ({liked, allPosts, importants}) => {
    return (
        <div className="app-header d-flex">
            <h1>Дмитрий Сафронов</h1>
    <h2>{allPosts} записей, из них понравились {liked}, избранные {importants}</h2>
        </div>
    )
}

export default AppHeader;