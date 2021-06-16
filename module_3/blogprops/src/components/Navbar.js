import React from "react"

function Navbar() {
    return (
        <nav className="navBar">
            <div>
                <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/index.html">Start Bootstrap"</a>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/about.html">Home</a>
                    </li>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/about.html">Start BootStrap</a>
                    </li>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html">Post</a>
                    </li>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    );
}

export default Navbar