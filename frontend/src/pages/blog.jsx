import { useEffect, useState } from "react";
import api from "../services/api";

function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        api.get("/blogs/")
            .then((response) => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h2>Loading blogs...</h2>;
    }

    return (
        <div>
            <h1>Our Blog</h1>

            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>

                        <p>{blog.excerpt}</p>

                        <p>
                            Published: {blog.published_at}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Blog;