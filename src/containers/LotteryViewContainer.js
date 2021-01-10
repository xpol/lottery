import {useState} from "react";
import {loadPrizes, addPrize, updatePrize, removePrize} from "../model";
import LotteryView from "../components/LotteryView"

const LotteryViewContainer = () => {
    const [prizes, setPrizes] = useState(loadPrizes);

    const handleDelete = (index) => {
        setPrizes(removePrize(index));
    }

    const handleAdd = (index) => {
        setPrizes(addPrize(index));
    }

    const handleUpdate = (index, changes) => {
        setPrizes(updatePrize(index, changes));
    }

    return (
        <LotteryView
            name="奖品列表"
            prizes={prizes}
            onAdd={handleAdd}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
        />
    );
}

export default LotteryViewContainer;
