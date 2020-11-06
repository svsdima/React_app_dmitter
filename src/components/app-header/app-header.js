import React from 'react';

import './app-header.css';
/* Подключаю styled-components, чтобы формировать стили прямо в js */
import styled from 'styled-components';

/* Использую styled-components */
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color:white;
    }
    h2 {
        font-size: 1.2rem;
        color: white;
    }
`

const AppHeader = () => {
    return (
        <Header>
            <h1>Дмитрий Сафронов</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}

export default AppHeader;