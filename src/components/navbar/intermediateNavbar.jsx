import Friends from "./friendsNavbar/friendsNavbar"
import s from "./friendsNavbar/friendsNavbar.module.css"
 
const ElementFriends = (props) => {
    let friendsNav = props.friends.map( f => <Friends name={f.name} img={f.img}/>)

    return(
        <div className={s.item}>
            {friendsNav}
        </div>
    )
}

export default ElementFriends
