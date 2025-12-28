


function Card(props){


    return(
        <>
        <div style={{backgroundColor:props.bgcolor}} className="flex-grow grow-1 text-center p-6 border rounded-md flex-col  ">
            <h1 className="text-2xl font-medium">
                {props.title}
            </h1>
            <p className="text-xl">
                {props.desc}
            </p>
        </div>
        
        </>
    )
}

export default Card