import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogsById } from '../../api/api'
import { faker } from "@faker-js/faker";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await fetchBlogsById(id);
                setBlog(response);
            } catch (error) {
            } finally {
            }
        };

        getBlog();
    }, [id]);

    return (
        <div className="row g-3 p-5 mb-5">
            <div class="card p-5 mb-5">
                <div class="body">
                    <img className="mb-5" style={{width:"-webkit-fill-available"}} src={faker.image.urlLoremFlickr({ category: 'nature' })} alt={blog.title} />
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;