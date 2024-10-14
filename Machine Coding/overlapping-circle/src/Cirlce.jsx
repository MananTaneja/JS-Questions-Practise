const Circle = ({ x, y, bgColor }) => {
    return (
        <div className="circle"
            style={{ backgroundColor: bgColor, top: `${y}px`, left: `${x}px` }}></div>
    )
}

export default Circle