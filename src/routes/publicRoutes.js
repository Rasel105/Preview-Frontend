import Home from "../pages/Home/Home";
import Login from "../pages/other/Login";
import Register from "../pages/other/Register";

export const publicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/register', name: 'Register', Component: Register },
];