function Book(props){

    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.image}></img>
            <p>{props.details}</p>
        </div>
    )
}

export default Book;