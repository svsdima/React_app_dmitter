import React from 'react';

import './post-list-item.css';

const PostListItem = () => {
    return (
        /* Каждый элемент списка. Внутри: текст, кнопка избранное, кнопка удалить, сердечко */
        <li className="app-list-item d-flex justify-content-between"> 
            <span className="app-list-item-label">
                Hello World!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button" 
                className="btn-star btn-sm">
                    {/* Класс <i></i> берём из Font Awesome (BootstrapCDN) */}
                    <i className="fa fa-star"></i>
                </button>
                <button 
                type="button" 
                className="btn-trash btn-sm">
                    {/* Класс <i></i> берём из Font Awesome (BootstrapCDN) */}
                    <i className="fa fa-trash-alt"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>

    )
}

export default PostListItem;