import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

/* Подключаю styled-components, чтобы формировать стили прямо в js */
import styled from 'styled-components';

/* Использую styled-components */
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

/* Могу создать новый стилистический компонент, унаследовать все стили у другого компонента и добавить свои */
// const SyledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `

const App = () => {

    /* Посты */
    const data = [
        {label: "Иду учить React", important: true},
        {label: "Это довольно весело", important: false},
        {label: "Надо отдохнуть...", important: false}
    ];

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;

/* d-flex - display:flex */