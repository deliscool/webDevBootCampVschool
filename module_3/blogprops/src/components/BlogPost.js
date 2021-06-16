import React from "react"
import BlogData from "./BlogData"


function BlogPost(props) {
    console.log(props)

    return(
        <div className="blog">
            <h1>{props.blogIn.title}</h1>
            <h3>{props.blogIn.subTitle}</h3>
            <p>By {props.blogIn.author} on {props.blogIn.date}</p>
        </div>
        )
}

export default BlogPost