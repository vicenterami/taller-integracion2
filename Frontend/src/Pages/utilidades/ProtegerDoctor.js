import Welcome from "../Welcome";

export default function ProtegerDoctor({ children}) {
    //obtener datos del usuario del localstorage
    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;
    if (userData && userData.isDoctor) {
        return children;
    } else {
        return <Welcome/>;
    }
}
