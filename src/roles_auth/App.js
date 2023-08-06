import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Lounge from "./components/Lounge";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";

import { Routes, Route } from 'react-router-dom';

import "./app.css";

const ROLES = {
    'User': 'user',
    'Admin': 'admin',
    'Manager': 'manager',
    'Editor': 'editor'
}

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>

                {/* public routes */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="linkpage" element={<LinkPage />} />
                <Route path="unauthorized" element={<Unauthorized />} />

                {/* we want to protect these routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                    <Route path="/" element={<Home />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                    <Route path="admin" element={<Admin />} />
                </Route>                

                <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
                    <Route path="editor" element={<Editor />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}>
                    <Route path="lounge" element={<Lounge />} />
                    
                </Route>

                {/* catch all */}
                <Route path="*" element={<Missing />} />

            </Route>
        </Routes>
    );
}