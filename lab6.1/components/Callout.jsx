function FancyBox(props) {
    return (
    <div className={'FancyBox FancyBox-' + props.color}>
    {props.children} {
    /* everything in between the opening
    <FancyBox> and closing </FancyBox> tags */}
    ); }
    return (
    </div>
    function Callout(props) {
    <FancyBox color="blue">
    <h1 className="Callout-title">{props.title}</h1>
    <p className="Callout-message">{props.message}</p>
    {props.children} {/* everything in between the opening
    <Callout> and closing </Callout> tags */}
    </FancyBox>
    ); }
    // render the Callout component with FullName as children
    // sample CSS to make things fancy
    <Callout title="Nested React Component"
    message="Simple message with a fancy box applied via composition">
    <FullName first="Elon" last="Musk" />
    </Callout>