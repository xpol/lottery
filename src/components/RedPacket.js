import {useState} from 'react';
import cx from "classnames";
import './RedPacket.css';


const RedPacket = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        console.log("Clicked.")
        setOpen(true);
    }

    const resetOpen = () => {
        console.log("Clicked.")
        setOpen(false);
    }

    return (
        <div className="RedPacket">
            <div className="RedPacket-next" onClick={resetOpen} />
            <div className="Prize">
                <span>免做数学作业一项</span>
            </div>
            <div className={cx("RedPacket-lower", {open})}/>
            <div className={cx("RedPacket-upper", {open})}/>            
            <div className={cx("RedPacket-button", {open})} onClick={handleOpen}>開</div>
        </div>
    )
}

export default  RedPacket;
