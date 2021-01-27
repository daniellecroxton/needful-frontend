import React from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'
import SideNav from './components/SideNav'
class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
}

  render() {

    return (
      <div className="App">
          <h1>Needful.</h1>
          <SideNav/>
          <UsersContainer users={this.props.users}/><br/>
          <ItemsContainer users={this.props.users}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(App)
