import { useState } from "react";


const Form = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [erro,setErro]=useState('')
    
    const handelSUbmit = (e) => {
        e.preventDefault()
        if(password.length<5){
            setErro("please enter 6 digit longer")
        }
        else{
            setErro('')
            console.log(name,password,email)
        }
       
    }
    // name Handelar
    const nameHander=e=>{
        setName(e.target.value)
    }
    const emailHander=e=>{
        setEmail(e.target.value)
    }
    const passwordHander=e=>{
        setPassword(e.target.value)
    }
 
    return (
        <form onSubmit={handelSUbmit} className="space-y-4">
            <h1 className="text-2xl font-bold">My Form</h1>
            <input onChange={nameHander} type="text" name="name" placeholder="usename" className="input input-bordered input-accent w-full  max-w-xs" />
            <br />
            <input onChange={emailHander} type="email" name="email" placeholder="email" className="input input-bordered input-accent w-full max-w-xs" />
            <br />
            <input onChange={passwordHander}  required type="password" name="password" placeholder="password" className="input input-bordered input-accent w-full max-w-xs" />
            <br />
            <button className="btn btn-primary">submit</button>
            {
                erro && erro
            }
        </form>
    );
};

export default Form;