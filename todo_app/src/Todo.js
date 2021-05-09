import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary="Todo" secondary={props.text}></ListItemText>
            </ListItem>
            <li></li>
        </List>
    )
}

export default Todo
