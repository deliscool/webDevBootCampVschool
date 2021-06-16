import React from "react"

function Blog(props){
    return (
        <div className="blog">
            <h1>{props.blogInput.title}</h1>
            <h3>{props.blogInput.subTitle}</h3>
            <p>Posted by {props.blogInput.author} on {props.blogInput.date}</p>
        </div>
    )
}

export default Blog