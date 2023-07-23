import React from 'react'

export default function ToDoListItem({changeStatus,removeItem,k,item,index}) {
    var todoClass=item.done ? "done":"undone";
    var isDoneImg=item.done?'no':'ok';

    function CloseClick(){
        removeItem(index);
    }

    function ChangeStatus(){
        changeStatus(index);
    }
  return (
      <li className='list-group-item'>
        <div className={todoClass}>
            <span onClick={ChangeStatus} style={{cursor:"pointer"}}>
                <img style={{width:"15px",height:"15px"}} src={'../'+isDoneImg+'.png'} alt='ok' />
            </span>
           <span style={{display:"inline-block",width:"90%"}}>
                {item.value}
           </span>
            <span onClick={CloseClick} style={{display:"inline-block",width:"5%",cursor:"pointer"}}>
                <img style={{width:"15px",height:"15px"}} src='../x.png' alt='cancel' />
            </span>
        </div>
      </li>
  )
}
