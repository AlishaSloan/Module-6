function PropsDisplayer(props) {

    const stringProps = JSON.stringify(props);

    return (
        <div className="PropsDisplayer componentBox">
            <h2>Check out my props!</h2>
            <h3>{stringProps}</h3>
            <h3></h3>
        </div>
    )
}

export default PropsDisplayer;