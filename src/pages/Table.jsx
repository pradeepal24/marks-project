import {useState} from "react";
import {useEffect}  from 'react'
import  '../styles/table.css'
 export default function TableComponent()  {
    const [Name , setName] = useState("");
    const [Whole , setWhole] = useState([['NAME','ENGLISH','MATHS','CS','CHEMISTRY','PHYSICS']]);
    const [Data , setData] = useState([]);
    const [Data1 , setData1] = useState("");
    const [Data2 , setData2] = useState("");
    const [Data3 , setData3] = useState("");
    const [Data4, setData4] = useState("");
    const [Data5 , setData5] = useState("");
   

    const Change= (e)=>{
        setName(e.target.value)
    }
    
    const Change1 = (e)=>{
        setData1(e.target.value)
    }
    const Change2 = (e)=>{
        setData2(e.target.value)
    }
    const Change3 = (e)=>{
        setData3(e.target.value)
    }
    const Change4 = (e)=>{
        setData4(e.target.value)
    }
    const Change5 = (e)=>{
        setData5(e.target.value)
    }

 
    useEffect(()=>{
        if (Data.length>0){
            setWhole(w=>[...w , Data]);
            setData1(d=>[]);
        }
    },[Data]);

     const Submit = ()=>{
        if(Name!=""&&Data1!=""&&Data2!=""&&Data3!=""&&Data4!=""&&Data5!=""){
            setData([Name,Data1,Data2,Data3,Data4,Data5])
            setName("");
            setData1("");
            setData2("");
            setData3("");
            setData4("");
            setData5("");



        }
     }
    return(
        <>
        <form action="">
        <label>Name:</label>
        <input placeholder="name" value={Name} required onChange={Change}></input>
        <label>Data1</label>
        <input placeholder="Data1" value={Data1} required onChange={Change1}></input>
        <label>Data2</label>
        <input placeholder="Data2" value={Data2} required onChange={Change2}></input>
        <label>Data3</label>
        <input placeholder="Data3" value={Data3} required onChange={Change3}></input>
        <label>Data4</label>
        <input placeholder="Data4" value={Data4} required onChange={Change4}></input>
        <label>Data5</label>
        <input placeholder="Data5" value={Data5} required onChange={Change5}></input>
        <button onClick={Submit}>Submit</button></form>
       
            <div className='border-black border-2 border-b-0 ml-10 mt-20 h-fit mr-4' >
            {Whole.map((item, index) =><div className='grid grid-cols-6 border-black border-b-2 ' key={index}>
                {item.map((data,indexx)=>
                <p className='' key={indexx} id={indexx}>{data}</p>

            )}
            </div>
            )}
        </div>
        
        
        
        </>
    );
 };
 
