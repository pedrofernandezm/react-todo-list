import React from 'react';

export default function Item({ item, onCheckHandler}) {
  return(
    <div className="view">
      <input className="toggle" type="checkbox" checked={item.completed} onChange={onChangeCheck} />
      <label>{ item.description }</label>
      <button className="destroy"></button>
    </div>
  );

  function onChangeCheck(event){
    onCheckHandler(event, item);
  }
}
