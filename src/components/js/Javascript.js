import React, { useState } from 'react';
import data from '../../data/data';
import JavascriptAssign from './JavascriptAssign';

const Javascript = () => {
  // console.log(data);
  const [Javascript,setJavascript]=useState('js');
  // const [assign,setAssign]=useState('assignment')
  const [proj,setProject]=useState('project');
  console.log(setJavascript,setProject);
  return(
    <>
      <div className="total"  style={{'display':'flex'}} >
        {/* <div className="left">
        {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="assi" key={index} >
                    {(type === Javascript && sub===assign) ? 
                        <JavascriptAssign name={name} desc={desc} url={url} clr={assign}  />
                    : null }
                  </div>
        })}
        </div> */}

        <div className="right js_container">
          {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="proj" key={index} >
                    {(type === Javascript && sub===proj) ? 
                        <JavascriptAssign name={name} desc={desc} url={url}  clr={proj} />
                    : null }
                  </div>
        })}
        </div>
      </div>
    </>
  )
}
export default Javascript;