import React from "react"

const Item = ({greeting}) => {
    return (
        <div className="item">
            <h1>
            {greeting}
            </h1>
        </div>
    )
}

export default Item