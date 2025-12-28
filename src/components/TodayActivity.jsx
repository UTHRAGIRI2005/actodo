import {useState} from "react";
import AddActivity from "./AddActivity"

function TodayActivity(props) {

    const List = props.List
    const setList = props.setList  
    return (
        <>
            <div className="  flex-grow p-2 border rounded-md"  style={{backgroundColor:"#B8AEE4"}}>
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {List.length==0?<p>You haven't added any activity yet..!</p>: ""}

                {
                    List.map(function(item,index){
                        return (
                            <AddActivity id={item.id} index={index} item={item.activity} List={List} setList={setList}></AddActivity>
                        )
                    })
                }
            </div>
        </>
    )
}


export default TodayActivity