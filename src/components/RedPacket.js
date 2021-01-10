import {useEffect, useState} from 'react';
import cx from "classnames";
import './RedPacket.css';


const RedPacket = ({round, index, name, active, onOpen}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [round])

    const handleOpen = () => {
        if (active) {
            setOpen(true);
            onOpen(index)
        }
    }

    return (
        <div className="RedPacket">
            <div className="Prize">
                <span>{name}</span>
            </div>
            <div className={cx("RedPacket-lower", {open})}/>
            <div className={cx("RedPacket-upper", {open})}/>
            <div className={cx("RedPacket-button", {open})} onClick={active ? handleOpen : null}>開</div>
        </div>
    )
}

export default  RedPacket;
