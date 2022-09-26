import React from 'react'

const Slider = (props) => {
    const slider = props.slider
    return (
        <div>
            {
                <img src={slider.id} alt="" />
            }
        </div>
    )
}

export default Slider