import React, { useRef, lazy, Suspense } from "react";
import styled from "styled-components";
const CommetsSection = lazy(() => import("./CommetsSection"));

export default function AddCommentForm({ memory, comments }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const authorRef = useRef(null);

  const addComment = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;

    titleRef.current.value = "";
    contentRef.current.value = "";
    authorRef.current.value = "";

    memory((current) => [{ title, content, author }].concat(current));
  };

  const next = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (e.shiftKey && e.target.name === "content") return;
      switch (e.target.name) {
        case "title":
          contentRef.current.focus();
          break;
        case "content":
          authorRef.current.focus();
          break;
        case "author":
          addComment(e);
          break;
      }
    }
  };

  const CommentsArapper = styled.div`
    background-color: rgba(220, 20, 20, 0.25);
    width: 80vw;
    margin: 0 auto;
  `;

  const CommentForm = styled.div`
    display: grid;
    grid-template-rows: 1fr 5fr 1fr 1fr;
    row-gap: 1vh;
    height: 30vh;
    border-radius: 5px;
    font-size: 1.5vh;
  `;

  const InputRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    padding: 1vh 1vw;

    input,
    textArea {
      border-radius: 5px;
      border: none;
      &:focus {
        outline: none;
      }
    }

    span {
      font-size: 2vh;
      font-weight: bold;
    }
  `;

  const AddButton = styled.span`
    background-color: rgb(15, 10, 40);
    border-radius: 5px;
    width: 3em;
    padding: 1vh 0;
    margin: 1vh 1vw 2vh auto;
    text-align: center;
    &:hover {
      cursor: pointer;
      filter: brightness(1.5);
    }
  `;

  const BigText = styled.h1`
    font-size: 2.5em;
    margin-left: 1vw;
  `;

  return (
    <CommentsArapper>
      <BigText> Tell Us what you think...</BigText>
      <CommentForm>
        <InputRow>
          <span>Title:</span>
          <input name="title" ref={titleRef} onKeyUp={next} />
        </InputRow>
        <InputRow>
          <span>Content:</span>
          <textarea name="content" ref={contentRef} onKeyUp={next} />
        </InputRow>
        <InputRow>
          <span>By:</span>
          <input name="author" ref={authorRef} onKeyUp={next} />
        </InputRow>
        <AddButton name="submit-button" type="submit" onClick={addComment}>
          Add
        </AddButton>
      </CommentForm>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CommetsSection comments={comments} />
      </Suspense>
    </CommentsArapper>
  );
}
