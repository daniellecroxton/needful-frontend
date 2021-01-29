import React from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'
import SideNav from './components/SideNav'
import UserList from './components/UserList'
import './css/App.css'
class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
}

  render() {

    return (

      <div className="App">
          <h1>Needful.</h1>
        <div>
          <SideNav/>
          Users:
            <UserList users={this.props.users && this.props.users}/>
        </div>
        <div>
          <UsersContainer users={this.props.users}/><br/>
          <ItemsContainer/>
        </div>
      </div>

      );
  
  }
}

const mapStateToProps = state => {
  return {
      users: state.users,
      loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchUsers})(App)