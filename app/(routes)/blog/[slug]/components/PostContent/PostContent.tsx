import React from "react";
import { marked } from "marked";
import "./PostContent.css";

export default function PostContent({ content }: { content: string }) {
  const htmlArticle = marked.parse(content);

  return (
    <div className="post-content">
      <hr className="py-5" />
      <div dangerouslySetInnerHTML={{ __html: htmlArticle }} />
    </div>
  );
}
