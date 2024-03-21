

const Form = () => {
    const handelSUbmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <form onSubmit={handelSUbmit} className="space-y-4">
            <h1 className="text-2xl font-bold">My Form</h1>
            <input type="text" name="name" placeholder="Type here" className="input input-bordered input-accent w-full  max-w-xs" />
            <br />
            <input type="email" name="email" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
            <br />
            <button className="btn btn-primary">submit</button>
        </form>
    );
};

export default Form;