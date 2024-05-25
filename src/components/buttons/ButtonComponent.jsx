export const ButtonComponent = ({
    styleBootstrap, text, linkImg
}) => {
    return(
        <button className={`btn btn-${styleBootstrap}`}>
            <img src={linkImg} alt="" width={100} height={100} style={{display: "flex", flexDirection: "column"}}/>
            <p className="fw-bold">{text}</p>
        </button>
    )
}