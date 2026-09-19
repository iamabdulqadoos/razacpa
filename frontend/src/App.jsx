import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Blog from "./pages/blog";
import BlogDetail from "./pages/blogDetail";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Home */}
                <Route
                    path="/"
                    element={<Navigate to="/blog" replace />}
                />

                {/* Blog Listing */}
                <Route
                    path="/blog"
                    element={<Blog />}
                />

                {/* Blog Detail */}
                <Route
                    path="/blog/:slug"
                    element={<BlogDetail />}
                />

            </Routes>

        </BrowserRouter>

    );
}


export default App;