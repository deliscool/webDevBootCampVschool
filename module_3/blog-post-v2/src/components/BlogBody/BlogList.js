import React from "react"
import BlogData from "./BlogData"
import Blog from "./Blog"

function BlogList() {

    const blogComponents = blogData.map(function(blog, index){
        return <Blog key={index} blogInput={blog}/>
    })

    return (
        <div className="blogList">
            {blogComponents}
        </div>
    )
}

export default BlogList
