import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import ElementFriends from "./intermediateNavbar"
import s1 from "./friendsNavbar/friendsNavbar.module.css"

const Navbar = (props) => {
  return(
    <nav className={s.nav}>
      <div className={s.item} >
        <NavLink to="/profile" activeClassName={s.active__link}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active__link}>Message</NavLink>
      </div>
      <div className={s.item}> 
        <NavLink to="/news" activeClassName={s.active__link}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active__link}>Music</NavLink>
      </div>
      <div className={`${s.item} ${s.last}`}>
        <NavLink to="/settings" activeClassName={s.active__link}>Settings</NavLink>
      </div>
      <div className={`${s.item} ${s.last1}`}>
        <div className={s1.text}>Friends</div>
          <ElementFriends friends={props.sidebar.friends}/>
      </div>
    </nav>
  )

}

export default Navbar
