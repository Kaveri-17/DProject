import React from "react";
import "./ResourceContent2.css"; // Import the corresponding CSS file

function ResourceContent2() {
    const posts = [
        {
            id: 1,
            title: "Nunc Volutpat Venenatis",
            author: "Nick Roach",
            date: "May 9, 2014",
            category: "Category",
            comments: 4,
            description:
                "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis...",
            image: "https://plus.unsplash.com/premium_photo-1664372145543-d60ba2756a7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D", // Replace with your actual image path
        },
        {
            id: 2,
            title: "Vestibulum Nisl Felis",
            author: "Nick Roach",
            date: "May 9, 2014",
            category: "Category",
            comments: 5,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque...",
            image: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_16_9_1200x675/public/field_blog_entry_teaser_image/2021-07/handwriting_literacy_learning.png.jpg?itok=ByDM4Zdf", // Replace with your actual image path
        },
        {
            id: 3,
            title: "Proin Eu Augue Efficitur",
            author: "Nick Roach",
            date: "May 9, 2014",
            category: "Category",
            comments: 3,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque...",
            image: "https://nationaltoday.com/wp-content/uploads/2020/10/National-Day-on-Writing-1.jpg", // Replace with your actual image path
        },
    ];

    return (
        <div className="resource-content">
            <h2 className="section-title">Most Popular Posts</h2>
            <div className="posts-grid">
                {posts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <img src={post.image} alt={post.title} className="post-image" />
                        <div className="post-content">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-meta">
                                by {post.author} | {post.date} | {post.category} | {post.comments} Comments
                            </p>
                            <p className="post-description">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResourceContent2;
