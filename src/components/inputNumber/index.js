import React, { useState, useEffect, useMemo } from 'react';

export default function InputNumber(props) {
  const [myValue, setMyValue] = useState('');
  const controlled = useMemo(() => "value" in props, [props])
  const showValue = useMemo(() => controlled ? props.value : myValue, [controlled, props.value, myValue]);
  const { onChange } = props;
  useEffect(() => {
    if (!controlled) setMyValue(props.defaultValue)
  }, [controlled, props.defaultValue])
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
