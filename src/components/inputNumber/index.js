import React, { useState, useEffect, useMemo } from 'react';

export default function InputNumber(props) {
  // 定义组件内部value变量， 如果props传进了defaultValue，则value初始值设为defaultValue
  const [myValue, setMyValue] = useState(props.defaultValue || '');
  // 定义 controlled 变量， 标记 是否受控 ，通过props中是否存在value来判断
  const controlled = useMemo(() => "value" in props, [props]);
  // 定义input框绑定的值 showValue， 通过 controlled来判断showValue的取值；
  // 受控时取 props传进来的value属性值； 非受控时 取组件内部value 
  const showValue = useMemo(() => controlled ? props.value : myValue, [controlled, props.value, myValue]);
  const { onChange } = props;
  return (
    <input
      type="text"
      value={showValue}
      onChange={e => {
        setMyValue(e.target.value);
        if (onChange) onChange(e);
      }}
    />
  );
}
