import { useContext, useState } from "react"
import { AppContext } from "./AppContext";

export default function AddPage(){
    const [val,setVal]=useState({uname:"",adhar:null,mobile:null,age:20});

    const{data}=useContext(AppContext);

    function changeHandler(event){
        const {name,value}=event.target;
        setVal({...val,[name]:value});
        

    }
    function submitHandler(){
        if(val.uname===""|| val.adhar===null || val.mobile===null ||val.age===null){
            alert("Please fill all the details");
            return;
        }
        data.push(val);

        let tr=document.createElement("tr");
        let name=document.createElement("td")
        name.textContent=val.uname;
        let adhar=document.createElement("td")
        adhar.textContent=val.adhar;
        let mobile=document.createElement("td")
        mobile.textContent=val.mobile;
        let age=document.createElement("td")
        age.textContent=val.age;

        tr.appendChild(name);
        tr.appendChild(adhar);
        tr.appendChild(mobile);
        tr.appendChild(age);

        let p=document.getElementById("table");
        p.appendChild(tr);

        

        
    }


    return(<div className="w-[80%] ">

        <table className=" border-2 w-[100%] mt-5 h-[500px] flex flex-col justify-start  gap-8 overflow-scroll " id="table">
            <tr className=" flex justify-evenly " >
                <td>Name</td>
                <td>Date of Birth</td>
                <td>Adhar Number</td>
                <td>Modile Number</td>
                <td>Age</td>
                <td>Actions</td>
            </tr>

            <tr className="active "  id="tr">

            <td><input type="text" required id="uname" value={val.uname} name="uname" onChange={(event)=>{
                changeHandler(event);
            }} /> Name</td>

<td><input type="date" required id="uname" value={val.uname} name="uname" onChange={(event)=>{
                changeHandler(event);
            }} /> DOB</td>
           
            <td><input type="text" id="adhar" required name="adhar" value={val.adhar} onChange={(event)=>{
                changeHandler(event);
            }} />Adhaar</td>
            <td><input type="text" id="mobile" required name="mobile" value={val.mobile} onChange={(event)=>{
                changeHandler(event);
            }} /> Mobile</td>
            <td><input type="text" id="age" readOnly  value={val.age}  onChange={(event)=>{
                changeHandler(event);
            }}/> Age</td>
            <td><button onClick={submitHandler}>Submit</button></td>


            </tr>

            
        </table>
        <button className="flex justify-end fixed bottom-2  right-52 bg-blue-400 p-5 rounded-md  " onClick={()=>{
            let  tr=document.getElementById("tr");
            tr.classList.contains("active")?tr.classList.remove("active"):tr.classList.add("active");
        }}>ADD PERSON</button>
    </div>)
}