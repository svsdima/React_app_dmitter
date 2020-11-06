import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
    

    /* Создаёт вёрстку на сайте */
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames +=' important';
        }
        if (like) {
            classNames +=' like';
        }
        
        return (
            <div className={classNames}> 
                <span 
                className="app-list-item-label"
                onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                        {/* Класс <i></i> берём из Font Awesome (BootstrapCDN) */}
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        {/* Класс <i></i> берём из Font Awesome (BootstrapCDN) */}
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>

        )
    }
}
