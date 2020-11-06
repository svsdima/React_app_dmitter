import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important:false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this)
    }

    /* Когда кликаем на кнопку изменяет состояние нашего поста на избранное или нет */
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    /* Когда кликаем на кнопку изменяет состояние нашего поста на понравилось или нет */
    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    /* Создаёт вёрстку на сайте */
    render() {
        const {label} = this.props;
        const {important, like} = this.state;
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
                onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                        {/* Класс <i></i> берём из Font Awesome (BootstrapCDN) */}
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm">
                        {/* Класс <i></i> берём из Font Awesome (BootstrapCDN) */}
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>

        )
    }
}
