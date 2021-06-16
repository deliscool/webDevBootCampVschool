import React from "react"
import blogData from "./BlogData"
import BlogPost from "./BlogPost"

function BlogList() {

    const blogComponents = blogData.map(function(blog, index) {
        return <BlogPost key={index} blogIn={blog}/>
    })

    return (
        <main className="body">
            <div className="blogList">
                {blogComponents}
            </div>
            <button>OLD POSTS</button>
        </main>
            
            )
}

export default BlogList