import React, { useState } from 'react';
import data from '../../data/data';
import ReacAssign from './ReacAssign';

const Reac = () => {
  // console.log(data);
  const [Reac,setReac]=useState('reac');
  const [assign,setAssign]=useState('assignment')
  const [proj,setProject]=useState('project');
  console.log(setReac,setAssign,setProject);
  return(
    <>
      <div className="total"  style={{'display':'flex'}} >
        <div className="left">
        {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="assi" key={index} >
                    {(type === Reac && sub===assign) ? 
                        <ReacAssign name={name} desc={desc} url={url} clr={assign}  />
                    : null }
                  </div>
        })}
        </div>

        <div className="right">
          {data.map((item,index)=>{
          const {name,type,url,sub,desc}=item;
          // console.log(item);
          return <div className="proj" key={index} >
                    {(type === Reac && sub===proj) ? 
                        <ReacAssign name={name} desc={desc} url={url}  clr={proj} />
                    : null }
                  </div>
        })}
        </div>
      </div>
    </>
  )
}
export default Reac;