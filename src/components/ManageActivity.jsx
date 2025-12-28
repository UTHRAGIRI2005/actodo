import {useState} from "react";


function ManageActivity(props){
         const   List = props.List
         const   setList = props.setList

         const [newList, setnewList] = useState("")

         function handlenewlist(event){
            setnewList(event.target.value)
         }

         function handleadd(){
            setList([...List,{id:List.length+1, activity:newList}])
            setnewList("")
         }

    return(
        <>
        <div>
            <h1 className="text-2xl font-medium my-4">Manage Activities</h1>
            <input value={newList} onChange={handlenewlist}  className="border border-black px-1 py-1 focus:outline-none" type="text" placeholder="Next Activity?" /> 
            <button onClick={handleadd} className="bg-black text-white border py-1 border-black px-2">Add</button>
        </div>
        
        </>
    )
}


export default ManageActivity