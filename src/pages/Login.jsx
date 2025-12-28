import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(props) {
    const navigate = useNavigate()
    const users = props.users

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

    const [Ruser,setRuser] = useState(true)

    function handleEInput(event) {
        seteusername(event.target.value)
    }

    function handleEPassword(event) {
        setepassword(event.target.value)
    }

    function Checkuser() {
        var userfound = false
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Success")
                userfound = true
                navigate("/Landing",{state:{user:eusername}})
            }
            if(userfound === false) {
                console.log("Login Failed")
                setRuser(false)
            }
        })
    }

    return (
        <div className="bg-black p-10">
            <div style={{ backgroundColor: "#EFEFEF" }} className=" rounded-md p-16">
                <h1 className="text-4xl font-medium">Hey Hi 👋</h1>
                {
                Ruser == true?<p>I help you manage your activities after you Login :)</p>:<p className="text-red-600">Please Sign Up Before you Login</p>}

                <div className="flex flex-col gap-4 my-4">
                    
                        <input onChange={handleEInput} className="w-52 p-1 bg-transparent border-2 border-black rounded-md" type="text" placeholder="username" />
                        <input onChange={handleEPassword} className="w-52 p-1 bg-transparent border-2 border-black rounded-md" type="text" placeholder="password" />
                        <button onClick={Checkuser} style={{ backgroundColor: "#7F6FD2", border: "#F5A004" }} className="w-24 p-1 border-2  rounded-md">Login</button>

                   
                    <p>Don't have an Account? <Link to={"/Signup"}> <u>Sign Up</u></Link></p>

                </div>

            </div>

        </div>
    )
}

export default Login