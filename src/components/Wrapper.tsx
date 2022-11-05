interface Props {
    children: JSX.Element[] | JSX.Element;
}

const Wrapper = (props : Props) => {
    return(
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;