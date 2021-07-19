import React from 'react';
import User from './User';
import Filter from './Filter';

//algo: 
//1.компонента User ернедерить список +++
//2.компонента Filter рендерить input і count +++
//3.компонента UserForm рендерить список з ключами +++
//4.передати значення input для компоненти UserForm (від дочірньої до батьківської), змінити state +++
//5.написати логіку фільтраціїї списку
//6.написати логіку, яка буде виводити count

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
    };
  }

  onChange = e => {
    this.setState({
      users: e.target.value
    })
    console.log(this.state)
    console.log(this.state.users)
  }

  onFilter = (users) => {
    if(users === '') {
      return this.props.users;
    }
    return this.props.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.users.toLowerCase())
    );
  }

  render() {
    return (
      <>
        <Filter
          filterText={this.state.users}
          count={this.state.users.length}
          onChange={this.onChange}
        />
        <ul className="users">
          {this.onFilter(this.state.users).map((users) => (
            <User key={users.id} {...users} />
          ))}
        </ul>
      </>
    );
  }
};

export default UsersList;
