import React, { useState } from 'react';
import data from '../../data/data';
import HtmlAssign from './HtmlAssign';

const Html = () => {
  // console.log(data);
  const [html,setHtml]=useState('html');
  const [assign,setAssign]=useState('assignment')
  const [proj,setProject]=useState('project');
  console.log(setHtml,setAssign,setProject);
  return(
    <>
      <div className="total"  style={{'display':'flex'}} >
        <div className="left">
        {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="assi" key={index} >
                    {(type === html && sub===assign) ? 
                        <HtmlAssign name={name} desc={desc} url={url} clr={assign}  />
                    : null }
                  </div>
        })}
        </div>

        <div className="right">
          {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="proj" key={index} >
                    {(type === html && sub===proj) ? 
                        <HtmlAssign name={name} desc={desc} url={url}  clr={proj} />
                    : null }
                  </div>
        })}
        </div>
      </div>
    </>
  )
}
export default Html;