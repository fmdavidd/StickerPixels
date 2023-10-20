import React from "react";
import Row from "./Row";
export default function DrawingPanel(props){
    const {width, height, selectedColor} = props;

    let rows = []

    for (let i =0; i < height; i++){
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    } 
    return(
        <div className="drawingPanel">
        <div className="pixels">
            {rows}
        </div>
    </div>
    );
}