import React, { Component } from "react";
import ReactDOM from "react-dom";

/**
 * The model to wrap components to dialog
 * @param {*} Dialog : The React Components which needs to be wrapped
 * @returns
 */
const BaseDialog = Item => {
  /**
   * Dialog
   * @param {*} props
   */
  function Dialog(props) {
    const { title, onClose, ...others } = props;
    return <Item {...others} onClose={onClose} />;
  }

  /**
   * Functions to display and close the Dialog component.
   * @param {*} props
   */
  Dialog.show = props => {
    let container = document.createElement("div");
    document.body.appendChild(container);

    function handleClose() {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
      container = null;
    }
    ReactDOM.render(<Dialog {...props} onClose={handleClose} />, container);
  };
  return Dialog;
};
export default BaseDialog;
