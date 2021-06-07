import React from "react";
import { Link } from 'gatsby'

const BlogList = ({blogPosts}) => {
    return (
        <ul>
        {blogPosts && blogPosts.map((item, i)=>{
            let blog = item.node.frontmatter;
            return (
                <li >
                    <Link to={blog.path}>
                    {blog.title}
                    </Link>
                </li>
            )
        })
        }
    </ul>
    );
}

export default BlogList;