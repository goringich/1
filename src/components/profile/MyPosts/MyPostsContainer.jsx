import MyPosts from "./MyPosts"
import { sendPostActionCreator } from "../../redux/profile-reduser"

const MyPostsContainer = (props) => {
  let sendPost = (text) => {
    let action = sendPostActionCreator(text)
    props.store.dispatch(action)
  }

  return(
    <MyPosts addPost={sendPost}/>
  )
}

export default MyPostsContainer;
