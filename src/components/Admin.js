
const Admin = () => {
    return (
        <div id="login-container">
            <form id="admin-login">
                <h2>Admin</h2>
                <label for="username">Username:</label>
                <br />
                <input type="text" id="username" placeholder="username"></input>
                <br />
                <label for="username">Password:</label>
                <br />
                <input type="password" id="password" placeholder="password"></input>
                <br />
                <input type="submit" value="login"></input>
            </form>
        </div>
    )
}

export default Admin;