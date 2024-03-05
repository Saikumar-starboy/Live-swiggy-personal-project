import { useState } from "react";

const ProfileLogin = () => {
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:"",
    })

    const [error , setError] = useState({})

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData((prevData) => ({...prevData,[name]:value})) 
    }

    const validateForm = () => {
        const newError = {}
        if(formData.username.trim() === ""){
            newError.username = "username is required"
        }
        if(formData.password.trim().length < 6){
            newError.password = "password must be more than 6 char"
        }
        if(formData.email.trim() === ""){
            newError.email = "email is required"
        }
        return newError;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validateForm()
        if(Object.keys(errors).length === 0){
            console.log("formData:",formData)
            setError({})
        } else {
            setError(errors)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="mt-28">
                <div>
                    <label>username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange}/>
                    {error.username && <div>{error.username}</div>}
                </div>
                <div>
                    <label>email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    {error.email && <div>{error.email}</div>}
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password"value={formData.password} onChange={handleChange}/>
                    {error.password && <div>{error.password}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProfileLogin;