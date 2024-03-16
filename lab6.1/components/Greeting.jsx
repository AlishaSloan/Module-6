function Greeting ({name, children}) {
    
    return(
         <div> 
            <h1>Hello, {name ? name : "World"} </h1>
            {children}
        </div>
    );
}

export default Greeting;