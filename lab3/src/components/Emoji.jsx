import { useState} from "react";

function Emoji() {
    const[Emoji, setEmoji] = useState('😀');

    const handleSwitchEmoji = () => {
        let newEmoji = Emoji === '😀' ? '😞' : '😀';
        setEmoji(newEmoji)
    }

    return (
        <div className="Emoji componentBox">
            Emoji: {Emoji}
            <button onClick={handleSwitchEmoji}>Change Mood</button>
        </div>
    )
}
export default Emoji;