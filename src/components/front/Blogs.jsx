import React, { useEffect, useState } from "react";
import { fetchBooks, fetchBlogs } from '../../api/api';
import BlogSection from "../common/sections/BlogSection";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetchBlogs();
                console.log(response);
                setBlogs(response);
            } catch (error) {
            } finally {
            }
        };

        getBlogs();
    }, []);

    return (
        <>
            <section className="welcome-section" style={{ margin: "8rem" }}>
                <div className="container text-center">
                    <h1>Blogs</h1>
                </div>
            </section>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5 mb-5">
                <BlogSection blogs={blogs} />
            </div>
        </>
        
    )
}

export default Blogs;