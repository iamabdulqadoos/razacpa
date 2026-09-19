import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./blog.css";

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
        return (
            <div className="blog-loading">
                Loading blogs...
            </div>
        );
    }

    return (
        <div className="blog-page">

            {/* Hero Section */}

            <section className="blog-hero">

                <div className="blog-hero-content">

                    <span className="blog-label">
                        RAZA CPA INSIGHTS
                    </span>

                    <h1>
                        Accounting & Tax Insights
                    </h1>

                    <p>
                        Helpful articles, tax tips, accounting guidance,
                        and financial insights for individuals and businesses.
                    </p>

                </div>

            </section>


            {/* Blog Section */}

            <section className="blog-section">

                <div className="blog-container">

                    <div className="blog-heading">

                        <div>
                            <span className="section-label">
                                OUR BLOG
                            </span>

                            <h2>
                                Latest Articles
                            </h2>
                        </div>

                    </div>


                    {blogs.length === 0 ? (

                        <div className="no-blogs">
                            <h3>No blogs available</h3>

                            <p>
                                Check back soon for our latest articles.
                            </p>
                        </div>

                    ) : (

                        <div className="blog-grid">

                            {blogs.map((blog) => (

                                <article
                                    className="blog-card"
                                    key={blog.id}
                                >

                                    {blog.featured_image && (
                                        <img
                                            src={blog.featured_image}
                                            alt={blog.title}
                                            className="blog-image"
                                        />
                                    )}

                                    <div className="blog-content">

                                        {blog.category && (
                                            <span className="blog-category">
                                                {blog.category.name}
                                            </span>
                                        )}

                                        <h3>
                                            {blog.title}
                                        </h3>

                                        <p>
                                            {blog.excerpt}
                                        </p>

                                        <div className="blog-footer">

                                            <span>
                                                {blog.published_at
                                                    ? new Date(
                                                        blog.published_at
                                                    ).toLocaleDateString()
                                                    : ""
                                                }
                                            </span>

                                            <button>
                                                Read More →
                                            </button>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    )}

                </div>

            </section>

        </div>
    );
}

export default Blog;