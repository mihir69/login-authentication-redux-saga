import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import axios from 'axios';
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch((err) => setUsers(err.message));
    }, []);

    return (
        <ListGroup>
            {users.length === 10 ? (
                users.map((user, index) => (
                    <ListGroupItem key={index}>{user.name}</ListGroupItem>
                ))
            ) : (
                <Spinner color='primary' />
            )}
        </ListGroup>
    );
}

export default Users;
