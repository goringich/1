import React from "react"
import s from "./Profile.module.css"
import Person from "./Person/Person"
import Posts from "./Posts/Posts"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
debugger
const Profile = (props) => {
  return( 
    <div>
      <img className={s.content__photo} src="https://image.freepik.com/free-photo/a-wide-panorama-of-the-beautiful-natural-landscape-with-a-swamp-coniferous-forest-and-sky-green-forest-blue-sky-and-white-fluffy-clouds-at-the-sunny-summer-day_158388-3897.jpg" alt=""/>
      <Person name="Igor.K" site="https://loh228337/index.html" birthday="28 September" city="Nizhny Novgorod" Education='school 187' avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"/>
      <MyPostsContainer store={props.store}/>
      {/* store -- profilePage -- postStatistics */}
      <Posts profilePage={props.store.profilePage}/>
    </div>
  )
}

export default Profile;
