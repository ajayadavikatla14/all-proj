import React, { useState } from 'react';
import data from '../../data/data';
import CssAssign from './CssAssign';

const Css = () => {
  // console.log(data);
  const [Css,setCss]=useState('css');
  const [assign,setAssign]=useState('assignment')
  // const [proj,setProject]=useState('project')
  console.log(setCss,setAssign);
  return(
    <>
      <div className="total" >
        <div className="left css_container">
        {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="assi" key={index} >
                    {(type === Css && sub===assign) ? 
                        <CssAssign name={name} desc={desc} url={url} clr={assign}  />
                    : null }
                  </div>
        })}
        </div>

        {/* <div className="right">
          {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="proj" key={index} >
                    {(type === Css && sub===proj) ? 
                        <CssAssign name={name} desc={desc} url={url}  clr={proj} />
                    : null }
                  </div>
        })}
        </div> */}
      </div>
    </>
  )
}
export default Css;