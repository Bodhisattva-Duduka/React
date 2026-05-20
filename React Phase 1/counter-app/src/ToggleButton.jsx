import { useState } from "react";

function ToggleButton() {
    const [toggle, setToggle] = useState(false)

    let theme;
    if (toggle) {
        theme = "light"
    } else {
        theme = "dark"
    }

    return (
        <div className="flex justify-center">
            <div className={` border-blue-600 border-4 p-6 ${toggle ? 'bg-white' : 'bg-black text-white'}`}>
                <button onClick={() => setToggle(prev => !prev)}>{theme}</button>
            </div>
        </div>

    )
}
export default ToggleButton