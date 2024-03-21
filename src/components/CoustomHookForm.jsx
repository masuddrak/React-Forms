import useInputForm from "../Hooks/useInputForm";


const CoustomHookForm = () => {
    const hooksValue=useInputForm("hello")
    const handelSUbmit=e=>{
        e.preventDefault()
        console.log(hooksValue.name)
    }
    return (
        <form onSubmit={handelSUbmit}>
            <input type="text" {...hooksValue}  placeholder="name" className="input input-bordered w-full max-w-xs" />
            <br />
            <input type="email"  placeholder='emeil' className="input input-bordered w-full max-w-xs" />
            <br />
            <input type="password"  placeholder='password' className="input input-bordered w-full max-w-xs" />
            <br />
            <button className="btn btn-primary">submit</button>
        </form>
    );
};

export default CoustomHookForm;