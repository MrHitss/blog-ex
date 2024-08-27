import React, { useEffect, useState } from "react";
import BlogSection from "../common/sections/BlogSection";
import { fetchAllBlogs } from "../../store/slices/blogSlice";
import { useDispatch, useSelector } from "react-redux";
const Blogs = () => {
    const { blogs, loading } = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBlogs());
    }, []);

    return (
        <>
            <section className="welcome-section" style={{ margin: "8rem" }}>
                <div className="container text-center">
                    <h1>Blogs</h1>
                </div>
            </section>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5 mb-5">
                {blogs ? <BlogSection blogs={blogs} /> : ''}

            </div>
        </>

    )
}

export default Blogs;