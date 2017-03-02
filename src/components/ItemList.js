import React from 'react';
import Item from './Item.js';

export default function ItemList({ list, onCheckHandler }) {
  return(
    <ul className="todo-list">
      { list.map(item =>
          <li className={completedItem(item)} key={item.id} >
            <Item item={ item }  onCheckHandler={onCheckHandler} />
          </li>
        )
      }
    </ul>
  );

  function completedItem(item){
    if(item.completed){
      return 'completed';
    }else{
      return '';
    }
  }
}