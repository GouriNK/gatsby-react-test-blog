import React from "react";
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogList = ({blogPosts}) => {
    return (
        <ul>
        {blogPosts && blogPosts.map((item, i)=>{
            let blog = item.node.frontmatter;
            const thumbnail = getImage(blog.thumbnailImage)
            return (
                <li key={i} >
                    <GatsbyImage image={thumbnail} alt={blog.title} />
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