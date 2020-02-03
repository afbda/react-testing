import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    getUsersFromApi(){
        return fetch("https://jsonplaceholder.typicode.com/users");
    }
    getUsers(){
        this.getUsersFromApi()
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({data:(result.map((user) =>
                <li key={user.id}>
                    {user.name}
                </li>
                ))});
            },
            (error) => {
                console.log("Ocorreu um erro");
            }
        )
    }
    componentWillMount(){
        this.getUsers();
    }
    render(){
        return(
            <div>
                <ul>{this.state.data}</ul>
            </div>
        );
    }
}

export default UserList;