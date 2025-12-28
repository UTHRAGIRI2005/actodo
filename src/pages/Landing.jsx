import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer";
function Landing(){

    const data =useLocation()
    console.log(data.state.user)

    return (
       <div className="bg-black p-16">
      <div className="bg-white p-10 border rounded-md">
        <Header name={data.state.user}></Header>

        <div className="flex gap-4 my-4 flex-wrap">
          <Card title="23" desc="Chennai" bgcolor="#8272DA"></Card>
          <Card title="December" desc="21-11-2025" bgcolor="#FC6662"></Card>
          <Card title="Built Using" desc="React" bgcolor="#FCA301"></Card>
        </div>


        <Todocontainer></Todocontainer>
        

      </div>

    </div>
    )
}

export default Landing