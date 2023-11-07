import Welcome from "../Welcome";

export default function ProtegerAdmin({ children}) {
    //obtener datos del usuario del localstorage
    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;
    if(userData && userData.isAdmin){
        return children;
    } else {
        return <Welcome/>;
    }
}
