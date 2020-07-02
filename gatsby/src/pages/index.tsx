import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BlogPostQuery } from "../../graphql-types";

export default function IndexPage () {
  console.log("asd")
  const posts = useStaticQuery<BlogPostQuery>(graphql`
  query BlogPost {
    allNodeBlogPost {
      edges {
        node {
          title
          body {
            processed
            summary
          }
          created
        }
      }
    }
  }`);
  return (
    <div>
      {posts.allNodeBlogPost.edges.map((post) => <>{JSON.stringify(post)}</>)}
    </div>
  );
}