import { useState } from "react";

function CharacterCount() {
    const [count, changeCount] = useState(0)

    function charCount(event) {
        changeCount(event.target.value.length)
    }

    return (
        <>
            <div className="flex-col items-center justify-center gap-2">
                <textarea maxLength={200} className="w-80 h-80 border-2 border-black " name="text" id="text" onChange={charCount}></textarea>
                <h1 className=" text-3xl">{count}/200</h1>
            </div>
        </>
    )
}
export default CharacterCount