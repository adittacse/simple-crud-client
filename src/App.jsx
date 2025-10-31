import './App.css'
import Users from "./components/Users.jsx";

const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());

function App() {

    return (
        <>
            <h1>Simple CRUD</h1>
            <Users usersPromise={usersPromise} />
        </>
    )
}

export default App
