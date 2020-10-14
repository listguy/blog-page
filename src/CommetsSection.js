import React from "react";
import styled from "styled-components";

export default function CommetsSection({ comments }) {
  const CommetnsBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    padding: 1vw;
    border-radius: 10px;
    overflow: auto;
    row-gap: 3vh;
    margin: 5vh auto;
  `;

  const Comment = styled.div`
    display: grid;
    grid-auto-rows: 3vh minmax(8vh, auto) 2vh;
    font-size: 1.2rem;
    padding: 4vh 1vw;
    border-radius: 10px;
    background-color: rgba(20, 20, 20, 0.8);

    .titles {
      font-weight: bold;
      font-size: 1rem;
    }

    .contents {
      padding: 1em 0;
      white-space: pre-wrap;
      height: fit-content;
    }

    .authors {
      font-style: italic;
    }
  `;

  return (
    <CommetnsBox>
      {comments.map((comment, i) => (
        <Comment key={`comment${i}`}>
          <span className="titles">{comment.title}</span>
          <div className="contents">{comment.content}</div>
          <span className="authors">By: {comment.author}</span>
        </Comment>
      ))}
    </CommetnsBox>
  );
}
