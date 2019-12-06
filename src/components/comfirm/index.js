import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function Comfirm(props) {
  const { title, msg } = props;
  return (
    <>
      <div className="comf-wrapper">
        <div className="comf-box">
          <div className="comf-box_header">
            <div className="comf-box_title">
              <span>{title}</span>
            </div>
            <button
              className="comf-box_headerbtn"
              onClick={() => {
                comfPromise.resolve(false);
                hideComf();
              }}
            >
              x
            </button>
          </div>
          <div className="comf-box_content">
            <div className="comf-box_message">{msg}</div>
          </div>
          <div className="comf-box_footer">
            <button
              onClick={() => {
                comfPromise.resolve(false);
                hideComf();
              }}
            >
              否
            </button>
            <button
              className="primary"
              onClick={() => {
                comfPromise.resolve(true);
                hideComf();
              }}
            >
              是
            </button>
          </div>
        </div>
      </div>
      <div className="comf-bgdrop"></div>
    </>
  );
}

let node = null;
let comfPromise = null;

function hideComf() {
  if (node) {
    ReactDOM.unmountComponentAtNode(node);
    document.body.removeChild(node);
  }
}

export default function comfirm(title, msg) {
  if (arguments.length === 0) {
    throw new Error("请传入要显示的comfirm语句！")
  }
  if (arguments.length === 1) {
    msg = arguments[0];
    title = '';
  }
  node = node || document.createElement('div');
  document.body.appendChild(node);
  ReactDOM.render(<Comfirm title={title} msg={msg} />, node);
  return new Promise((resolve, reject) => {
    comfPromise = { resolve, reject };
  });
}
