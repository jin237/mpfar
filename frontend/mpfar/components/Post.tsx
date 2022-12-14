import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

export type ProfileProps = {
  id: string;
  name: string;
  email: string;
  comment: string;
  affiliation: string;
  society: string[];
  followBy: string[];
  following: string[];
  thesis: string[];
  snsacccount: string[];
};

export type ThesisProps = {
  id: number;
  title :String;
  abstract : String;
  firstAuthor :String[];
  firstAuthorId: String[];
  otherAuthor   :   String[];
  tags      :   String[]
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>      	
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
