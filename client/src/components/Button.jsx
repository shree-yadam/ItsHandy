import React from "react";
import classNames from "classnames";

export default function Button(props) {


  return (
    <>
      <button
        onClick={props.onClick}
        className={"button"}
      >
        {props.children}
      </button>
    </>
  );
}