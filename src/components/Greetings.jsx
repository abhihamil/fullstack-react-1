function Greeting(props){
    console.log(props)
    return (
        <p>Hello {props.firstName} {props.lastName}! it's our first React App </p>
        )
    
}

export default Greeting;