import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import "./blogDetail.css";

function BlogDetail() {

    const { slug } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        api.get(`/blogs/${slug}/`)
            .then((response) => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog:", error);
                setError(true);
                setLoading(false);
            });

    }, [slug]);


    if (loading) {
        return (
            <div className="blog-detail-loading">
                Loading article...
            </div>
        );
    }


    if (error || !blog) {
        return (
            <div className="blog-not-found">

                <h1>Blog Not Found</h1>

                <p>
                    The article you're looking for doesn't exist.
                </p>

                <Link to="/blog">
                    ← Back to Blog
                </Link>

            </div>
        );
    }


    return (
        <article className="blog-detail">

            {/* HERO */}

            <section className="blog-detail-hero">

                <div className="blog-detail-container">

                    {blog.category && (
                        <span className="detail-category">
                            {blog.category.name}
                        </span>
                    )}

                    <h1>
                        {blog.title}
                    </h1>

                    <div className="detail-meta">

                        <span>
                            By {blog.author}
                        </span>

                        <span>•</span>

                        <span>
                            {blog.published_at &&
                                new Date(
                                    blog.published_at
                                ).toLocaleDateString()
                            }
                        </span>

                    </div>

                </div>

            </section>


            {/* FEATURED IMAGE */}

            {blog.featured_image && (

                <div className="detail-image-container">

                    <img
                        src={blog.featured_image}
                        alt={blog.title}
                        className="detail-image"
                    />

                </div>

            )}


            {/* CONTENT */}

            <section className="detail-content-section">

                <div className="detail-content">

                    <p className="detail-excerpt">
                        {blog.excerpt}
                    </p>

                    <div className="article-content">
                        {blog.content}
                    </div>


                    {/* TAGS */}

                    {blog.tags && blog.tags.length > 0 && (

                        <div className="blog-tags">

                            <h4>Tags</h4>

                            <div className="tags-list">

                                {blog.tags.map((tag) => (

                                    <span key={tag.id}>
                                        #{tag.name}
                                    </span>

                                ))}

                            </div>

                        </div>

                    )}


                    <div className="back-to-blog">

                        <Link to="/blog">
                            ← Back to Blog
                        </Link>

                    </div>

                </div>

            </section>

        </article>
    );
}

export default BlogDetail;