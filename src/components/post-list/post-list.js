import React from 'react';

import './post-list.css';

import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, label, important} = item;
        return (
            <li key={id} className="list-group-item">
               <PostListItem 
               label={label} 
               important={important} /> 
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>

    )
}

export default PostList;