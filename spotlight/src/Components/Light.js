import React from "react";

export const Light = props => (
    <div 
    className={`light ${(props.isActive) ? props.color : ''}`}>
    Light
    </div>
)