import React from 'react';
import s from './SidebarRandomUser.module.css';
import { NavLink } from 'react-router-dom';

// const Friend = (props) => {
//     return (
//         <li className={s.item}><NavLink to='/#' ><img src={props.ava} alt='ava'/> {props.name}</NavLink></li>
//     )
// }

const RandomUsers = (props) => {
  let RandomUsersElements = props.randomUsers.map(randomUser => {
    return (
      <li className={s.item} onClick={()=>{props.viewRandomUser(randomUser)}}>
        <NavLink to={`/profile/${randomUser.userId}`} >
          <img src={randomUser.photos.small || 'https://download-cs.net/steam/avatars/3377.jpg'} alt='ava' />
          <p>{randomUser.fullName}</p>
        </NavLink>
      </li>
    )
  })
  return (
    <div className={s.sidebar}>
      <h2>friend offers</h2>
      <ul className={s.friends}>
        {RandomUsersElements}
      </ul>
    </div>
  );

}

export default RandomUsers;