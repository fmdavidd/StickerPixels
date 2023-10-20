import React, {useState} from "react";
import { CompactPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
export default function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [selectedColor, setColor] = useState("#000000");

    function changeColor(color){
        setColor(color.hex);
    }
    return(
        <> 
        <DrawingPanel 
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
        />
        <CompactPicker color={selectedColor} onChangeComplete={changeColor} />
        
        </>
    )
    
}