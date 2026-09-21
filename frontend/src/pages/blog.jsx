import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./Blog.css";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await api.get("/blogs/");

                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);

                setError(
                    "Unable to load blogs. Please try again later."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Loading
    if (loading) {
        return (
            <div className="blog-loading">
                <div className="loading-spinner"></div>
                <p>Loading blogs...</p>
            </div>
        );
    }

    // Error
    if (error) {
        return (
            <div className="blog-error">
                <h2>Something went wrong</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <main className="blog-page">

            {/* =========================
                HERO SECTION
            ========================== */}

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


            {/* =========================
                BLOG SECTION
            ========================== */}

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

                        <p>
                            Stay informed with our latest accounting,
                            tax, and business insights.
                        </p>

                    </div>


                    {/* =========================
                        NO BLOGS
                    ========================== */}

                    {blogs.length === 0 ? (

                        <div className="no-blogs">

                            <div className="no-blogs-icon">
                                📝
                            </div>

                            <h3>
                                No blogs available
                            </h3>

                            <p>
                                Check back soon for our latest articles.
                            </p>

                        </div>

                    ) : (

                        /* =========================
                           BLOG GRID
                        ========================== */

                        <div className="blog-grid">

                            {blogs.map((blog) => (

                                <article
                                    className="blog-card"
                                    key={blog.id}
                                >

                                    {/* IMAGE */}

                                    <div className="blog-image-wrapper">

                                        {blog.featured_image ? (

                                            <img
                                                src={blog.featured_image}
                                                alt={blog.title}
                                                className="blog-image"
                                            />

                                        ) : (

                                            <div className="blog-image-placeholder">
                                                <span>RAZA CPA</span>
                                            </div>

                                        )}

                                    </div>


                                    {/* CONTENT */}

                                    <div className="blog-content">

                                        {/* CATEGORY */}

                                        {blog.category && (

                                            <span className="blog-category">
                                                {blog.category.name}
                                            </span>

                                        )}


                                        {/* TITLE */}

                                        <h3 className="blog-title">

                                            {blog.title}

                                        </h3>


                                        {/* EXCERPT */}

                                        <p className="blog-excerpt">

                                            {blog.excerpt}

                                        </p>


                                        {/* FOOTER */}

                                        <div className="blog-footer">

                                            <span className="blog-date">

                                                {blog.published_at
                                                    ? new Date(
                                                        blog.published_at
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        }
                                                    )
                                                    : "Recently"
                                                }

                                            </span>


                                            <Link
                                                to={`/blog/${blog.slug}`}
                                                className="read-more"
                                            >
                                                Read More
                                                <span>→</span>
                                            </Link>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default Blog;