import profileReduser from "./profile-reduser"
import dialogsReduser from "./dialogs-reduser"
import sidebarReduser from "./sidebar-reduser"

let store = {
    dispatch(action) {
        this._appState.profilePage = profileReduser(this._appState.profilePage, action)
        this._appState.dialogsPage = dialogsReduser(this._appState.dialogsPage, action)
        this._appState.sidebar = sidebarReduser(this._appState.sidebar, action)

        this._callSubscriber(this._appState)
    }
}

export default store
window.store = store


















