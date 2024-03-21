import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const handelSUbmit=e=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <form onSubmit={handelSUbmit}>
            <input type="text" ref={nameRef}  placeholder="name" className="input input-bordered w-full max-w-xs" />
            <input type="email" ref={emailRef}  placeholder='emeil' className="input input-bordered w-full max-w-xs" />
            <input type="password" ref={passwordRef}  placeholder='password' className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-primary">submit</button>
        </form>
    );
};

export default RefForm;