import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

     function handleEInput(event) {
        seteusername(event.target.value)
    }

    function handleEPassword(event) {
        setepassword(event.target.value)
    }

    function handleAdduser(){
        setusers([...users,{username:eusername, password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div style={{ backgroundColor: "#EFEFEF" }} className=" p-10 rounded-md">
                <h1 className="text-4xl font-medium">Hey Hi 👋</h1>
                <p>You can Signup here :)</p>

                <div className="flex flex-col gap-4 my-4">
                    
                        <input onChange={handleEInput} className="w-52 p-1 bg-transparent border-2 border-black rounded-md" type="text" placeholder="username" />
                        <input onChange={handleEPassword} className="w-52 p-1 bg-transparent border-2 border-black rounded-md" type="text" placeholder="password" />
                        <input className="w-52 p-1 bg-transparent border-2 border-black rounded-md" type="text" placeholder="confirm password" />
                        <button onClick={handleAdduser} style={{ backgroundColor: "#F5A004", border: "#F5A004" }} className="w-24 p-1 border-2  rounded-md">Sign Up</button>

                    
                    <p>You already have an Account? <Link to={"/"}> <u>Login</u></Link></p>

                </div>

            </div>

        </div>
    )
}

export default Signup