/*
 * @Author: deng
 * @Date: 2019-12-06 14:00:10
 * @LastEditTime: 2019-12-06 15:46:06
 * @Description: comfirm 方法组件
 * @FilePath: \my-react-stuff\src\components\comfirm\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// 常规组件 Comfirm 接收 title、msg 两个属性
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

// 新的node，用于挂载Comfirm组件
let node = null;
// 用于存放promise的resolve reject方法以供Comfirm组件按钮使用
let comfPromise = null;

// Comfirm点击事件后 关闭Comfirm,并从文档中去除
function hideComf() {
  if (node) {
    ReactDOM.unmountComponentAtNode(node);
    document.body.removeChild(node);
  }
}

// 暴露comfirm方法，用于生成一个新的Comfirm组件挂载到文档
export default function comfirm(title, msg) {
  // 防止不传入任何文字
  if (arguments.length === 0) {
    throw new Error("请传入要显示的comfirm语句！")
  }
  // 只传一个入参时，将入参作为msg使用
  if (arguments.length === 1) {
    msg = arguments[0];
    title = '';
  }
  node = node || document.createElement('div');
  document.body.appendChild(node);
  // 使用React-dom的render方法把Comfirm挂载到生成的node上
  ReactDOM.render(<Comfirm title={title} msg={msg} />, node);
  // 生成一个promise，并将resolve和reject赋值到comfPromise中，以供组件使用
  return new Promise((resolve, reject) => {
    comfPromise = { resolve, reject };
  });
}
