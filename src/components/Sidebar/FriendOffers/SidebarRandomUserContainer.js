import { connect } from 'react-redux';
import RandomUsers from './RandomUsers';
import React from 'react';
import * as axios from 'axios';
import { setRandomUser } from '../../../redux/sidebar-randomUser-reducer';
import { setUserProfile } from '../../../redux/post-reducer';

class RandomUserContainer extends React.Component {
  getRandomUser = () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${Math.ceil(Math.random() * 20)}`,
        {
          withCredentials: true
        }
      )
      .then((response) => {
        if (response.status !== 200) this.getRandomUser();
        this.props.setRandomUser(response.data);
      })
  }
  viewRandomUser = (user) => {
    this.props.setUserProfile(user);
  }
  render() {
    if (this.props.randomUsers.length < 3) this.getRandomUser();
    return (
      <RandomUsers {...this.props} viewRandomUser={this.viewRandomUser} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    randomUsers: state.sidebarRandomUser.randomUsers
  }
}

const SidebarRandomUserContainer = connect(mapStateToProps,
  {
    setRandomUser,
    setUserProfile
  })(RandomUserContainer);


export default SidebarRandomUserContainer;