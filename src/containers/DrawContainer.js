import {useEffect, useState} from "react";
import * as store from "../datasources/LocalStorage";
import RedPacket from "../components/RedPacket";



const DrawContainer = () => {
    const [lotteries, setLotteries] = useState({});

    useEffect(() => {
        setLotteries(store.load());
    }, []);

    useEffect(() => {
        store.save(lotteries);
    }, [lotteries]);
    return (
        <RedPacket prize={lotteries[0]} />
    )
}

export default DrawContainer;
