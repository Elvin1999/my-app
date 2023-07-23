import React, { useState } from "react";

export default function ToDoForm({addItem}) {

  const [text,setText]=useState('');
  
  function onSubmit(event){
    event.preventDefault();
        var newItemValue=text;
        console.log(newItemValue);
        if(newItemValue){
            console.log('okay');
            addItem({newItemValue});
        }
  }
  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <input onChange={e=>setText(e.target.value)} type="text" className="form-control" placeholder="add a new todo..."></input>
      <button type="submit" className="btn btn-default">Add</button>
    </form>
  );
}
