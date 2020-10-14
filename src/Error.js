import React, { Component } from "react";
import { LostPage } from "404-page";
import "404-page/dist/index.css";
import morty from "./evil morty.jpg";

export default class ErrorAchusharmuta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <LostPage face={morty} />
          <button onClick={() => window.location.assign("/")}>
            back to blog
          </button>
        </>
      );
    }
    return this.props.children;
  }
}
