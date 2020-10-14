import React, { useState } from "react";
import AddCommentForm from "./AddCommentForm";
import styled from "styled-components";

const initial = [
  {
    title: "WOW",
    content: "such an amzing post.\ni had a pleasure reading it.\nthank you!",
    author: "anonymous fan",
  },
  {
    title: "Booo",
    content: "you writing sucks!",
    author: "random hater",
  },
  { title: "Blip Blop", content: "f", author: "bot" },
];

export default function BlogPage() {
  const [comments, updateComments] = useState(initial);

  const Article = styled.div`
    width: 80vw;
    margin: 1vh auto 20vh auto;
    font-size: 1.1em;

    line-height: 2.2em;

    img {
      height: 40vh;
      width: inherit;
      paddding: 3vh 0;
    }
  `;
  return (
    <>
      <button
        onClick={() => {
          updateComments({});
        }}
      >
        Press here to cause an error
      </button>
      <Article>
        <h1>useRef</h1>
        <img
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="smart picture"
        />
        <div>
          const refContainer = useRef(initialValue); useRef returns a mutable
          ref object whose .current property is initialized to the passed
          argument (initialValue).
          <br /> The returned object will persist for the full lifetime of the
          component. A common use case is to access a child imperatively:
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .<br />
          current property. You might be familiar with refs primarily as a way
          to access the DOM. If you pass a ref object to React with{" "}
          {<code>{"<div ref={myRef} />"}</code>}, React will set its .current
          property to the corresponding DOM node whenever that node changes.
          However, useRef() is useful for more than the ref attribute. It’s
          handy for keeping any mutable value around similar to how you’d use
          instance fields in classes.
          <br /> This works because useRef() creates a plain JavaScript object.
          The only difference between useRef() and creating a {
            "{current: ...}"
          }{" "}
          object yourself is that useRef will give you the same ref object on
          every render. Keep in mind that useRef doesn’t notify you when its
          content changes. Mutating the .current property doesn’t cause a
          re-render. <br />
          If you want to run some code when React attaches or detaches a ref to
          a DOM node, you may want to use a callback ref instead. Create blog
          post page. <br /> Requirements:
          <br />
          <ul>
            <li>
              should include title, content and comments section that shows list
              of dynamically added comments and adding new comment form with
              name, content and submit. use react events and refs to add
              comment.
            </li>
            <li>
              use enter key to focus on on the next input at the commets form .
            </li>
            <li>surround page with error boundary.</li>
            <li>
              add the content and the content and comments components with
              React.lazy for faster page load. Upload the task to github and
              submit it to the following project -
              <a href="https://forms.gle/BuX7dDbp4ASk3Zkt9">link</a>
            </li>
          </ul>
        </div>
      </Article>
      <AddCommentForm memory={updateComments} comments={comments} />
    </>
  );
}
