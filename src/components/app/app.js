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
                {label: "Иду учить React", important: true, like: false, id: 1},
                {label: "Это довольно весело", important: false, like: false, id: 2},
                {label: "Надо отдохнуть...", important: false, like: false, id: 3}
            ],
            /* Строка поиска */
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

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
            label: body,
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

    /* Избранные записи */
    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        }); 
    }

    /* Понравившиеся записи */
    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        }); 
    }

    /* Поиск поста */
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        
        return items.filter( (item) => {
            /* В фильтре будем находить свойство label, а в нём то, что ввёл пользователь */
            return item.label.indexOf(term) > -1
        });
    }

    /* Фильтрация постов */
    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else if (filter === 'important') {
            return items.filter(item => item.important)
        } else {
            return items
        }
        
    }

    /* Выбор фильтра постов */
    onFilterSelect(filter) {
        this.setState({filter})
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    render () {
        const {data, term, filter} = this.state;

        const liked = data.filter((item) => item.like).length;
        const importants = data.filter((item) => item.important).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}
                importants={importants} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked} />
                <PostAddForm
                   onAdd={this.addItem} />
            </div>
        )
    }
}

/* d-flex - display:flex */