import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    /* Посты */
    const data = [
        {label: "Иду учить React", important: true},
        {label: "Это довольно весело", important: false},
        {label: "Надо отдохнуть...", important: false}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;

/* d-flex - display:flex */