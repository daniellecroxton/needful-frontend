import React from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'
import UsersContainer from './containers/UsersContainer'
import ItemsContainer from './containers/ItemsContainer'
import UserItemsContainer from './containers/UserItemsContainer'
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
        {/* <div className="sidenavtop"> */}
            <h1>Needful.</h1>
            <SideNav/>
            Users:
                <UserList users={this.props.users && this.props.users}/>
            {/* </div> */}
            {this.props.loading ? <h2>LOADING...</h2> : null}
            <UsersContainer users={this.props.users}/><br/>
            {/* <ItemsContainer users={this.props.users}/> */}
          {/* <div className="main"> */}
          <ItemsContainer/>
          {/* <UserItemsContainer /> */}
          {/* </div> */}
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
