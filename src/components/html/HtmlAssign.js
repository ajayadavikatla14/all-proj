import React, { useState } from 'react';
import {BiChevronsDown} from 'react-icons/bi'

const HtmlAssign = ({name,desc,url,clr}) => {
    const [toggle,setToggle]=useState(true);
  return (
    <div className="item">
         <div className="heading_link">
          <a href={url} className='link' target='_blank' rel='noreferrer'  >{name}</a>
         </div>
         <button onClick={()=>setToggle(!toggle)} className={`${clr==='assignment' ? 'btn-8-left' : 'btn-8-right'}`} ><BiChevronsDown className='fav_icon' /></button>
         {toggle ? null
           : <div className={`${clr==='assignment' ? 'description-left' : 'description-right'}`}>{desc}</div>
        }
    </div>
  )
}

export default HtmlAssign;