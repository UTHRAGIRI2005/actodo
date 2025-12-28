

function AddActivity(props) {
        const ActivityArr = props.List
        const setActivityArr = props.setList

       function handledelete(deleteid){
            
            const temp = ActivityArr.filter(function(item){

                if(item.id == deleteid)
                {
                    return false
                }
                else{
                    return true
                }
            })
            setActivityArr(temp)
       }

    return (
        <>
        <div className="flex justify-between">
            <p>
                {props.index + 1}.{props.item}
            </p>

            <button onClick={()=>{handledelete(props.id)}} className="text-red-500">Delete</button>

            </div>
        </>
    )
}

export default AddActivity