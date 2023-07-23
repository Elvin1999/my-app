import React from 'react'
import ToDoListItem from './ToDoListItem';



export default function ToDoList({todoItems,removeItem,changeStatus}) {
  var items=todoItems.map((item,index)=>{
      return (
          <ToDoListItem changeStatus={changeStatus} removeItem={removeItem} key={index} item={item} index={item.index}></ToDoListItem>
      );
  })
  return (
    <div>
      <ul className='list-group'>{items}</ul>
    </div>
  )
}
