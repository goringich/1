import React from "react"
import s from "./Dialogs.module.css"
import {BrowserRouter} from "react-router-dom"
import SMS from "./dialog/Friends&SMS/SMS"
import Friends from "./dialog/Friends&SMS/friends"
import { sendSMSActionCreator } from "../redux/dialogs-reduser"
debugger
const Dialogs = (props) => {
    let newSMSElement = React.createRef()

    let addSMS = () => {
        let text = newSMSElement.current.value
        props.dispatch(sendSMSActionCreator(text))
        newSMSElement.current.value = ""
    }    

    return(
        <BrowserRouter className={s.Dialogs}>
            <div className={s.title}>Dialogs</div>
            <div className={s.dialogs}>
                <div className={s.person}>
                    <Friends dialogs={props.dialogsPage.dialogs}/>
                </div> 
                <div className={s.right}>
                    <SMS sms={props.dialogsPage.sms}/>
                    <textarea ref={newSMSElement} type="text" placeholder="Input sms..."></textarea>
                    <button className={s.btn} onClick={addSMS}>Отправить</button>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs
