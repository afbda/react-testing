import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div>
                <ul>{this.props.users}</ul>
            </div>
        );
    }
}

export default UserList;