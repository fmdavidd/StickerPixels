import React, {useState} from "react";
import { CirclePicker } from "react-color";
export default function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideDrawingOptions, setHideOptions] = useState(true);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("start drawing");
    const [selectedColor, setColor] = useState("#f44336");

    function initializeDrawingPanel() {
        setHideOptions(!hideDrawingOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "start drawing" ? setButtonText("back") : setButtonText("start drawing");
    }
    function changeColor(color){
        setColor(color.hex);
    }
    return(
        <> 
        {hideDrawingPanel && <h1>Panel Dimensions</h1>}
        {hideDrawingPanel && <div>
            
                <div className="opciones">
                    <div className="opcion"><input type="radio" name="panelSize" className="panelInput"  defaultValue={16} onClick={(e) => {setPanelWidth(e.target.value) & setPanelHeight(e.target.value)}}/>
                    <p >16x16</p>
                    </div>
                    <div className="opcion">
                    <input type="radio" name="panelSize" className="panelInput" defaultValue={32} onClick={(e) => {setPanelWidth(e.target.value) & setPanelHeight(e.target.value)}}/>
                    <p>32x32</p>
                    </div>
                    <div className="opcion">
                    <input type="radio" name="panelSize" className="panelInput" defaultValue={64} onClick={(e) => {setPanelWidth(e.target.value) & setPanelHeight(e.target.value)}}/>
                    <p>64x64</p>
                    </div>
                </div>
            
        </div>}
        
        <button onClick={initializeDrawingPanel} className="button">{buttonText}</button>
        
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        </>
    )
    
}