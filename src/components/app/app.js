import React, {Component} from 'react';

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

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* Посты */
            data: [
                {label: "Иду учить React", important: true, id: 1},
                {label: "Это довольно весело", important: false, id: 2},
                {label: "Надо отдохнуть...", important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    /* Удаление поста (напрямую state менять нельзя, поэтому создаём новый массив без нужных нам элементов) */
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            /* Разбиваем массив data на две части: before - до нужного нам элемента, after - после нахождения элемента, а потом объединяем две части в один массив */
            const before = data.slice(0, index);
            const after = data.slice(index +1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    /* Добавление поста */
    addItem(body) {
        const newItem = {
            ladel: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render () {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem} />
                <PostAddForm
                   onAdd={this.addItem} />
            </AppBlock>
        )
    }
}

/* d-flex - display:flex */