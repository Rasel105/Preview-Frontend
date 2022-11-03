import Home from "../pages/Home/Home";
import MainPreview from "../pages/Home/MainPreview";
import Login from "../pages/other/Login";
import Register from "../pages/other/Register";

export const publicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/Home', name: 'Home', Component: Home },
    { path: '/:id', name: 'MainPreview', Component: MainPreview },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/register', name: 'Register', Component: Register },
];