import ManageActivity from "./ManageActivity"
import TodayActivity from "./TodayActivity";
import {useState} from "react";
function Todocontainer(){

    const [List,setList] = useState([
        {
            id:1,
            activity:"Wake Up"

        },
        {
            id:2,
            activity:"Eat dry food"

        }
    ])


    return(
        <>
        <div className="flex gap-2 flex-wrap ">
            <ManageActivity List={List} setList={setList}></ManageActivity>
            <TodayActivity List={List} setList={setList}></TodayActivity>

        </div>
        
        </>
    )
}
export default Todocontainer