import {useState} from "react";
import {Redirect} from "react-router-dom";
import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";
import memoize from "memoize-one";


import Animate from "../components/Animate"
import Back from "../components/Back";
import RedPacket from "../components/RedPacket";

import {hasAnyPrizes, loadPrizes, takePrize} from "../model";

import "./DrawContainer.css"


const flattenPrizes = (prizes) => {
    const r = [];
    for (let i = 0; i < prizes.length; ++i) {
        for (let c = 0; c < prizes[i].count; ++c) {
            r.push({name: prizes[i].name, index: i})
        }
    }
    return r;
}

const take = (array, n) => {
    const length = array.length;

    if (length === n) {
        return array;
    }
    if (length > n) {
        array.splice(0, length - n);
        return array;
    }

    for (let i = length; i < n; ++i) {
        const dup = Math.floor(Math.random() * length);
        array.push(array[dup]);
    }
    return array;
}

const numberOfCandidates = 6;
const numberOfCandidatesInAChunk = numberOfCandidates / 2;

const generateCandidates = memoize((prizes) => (
    chunk(take(shuffle(flattenPrizes(prizes)), numberOfCandidates), numberOfCandidatesInAChunk)
))

const DrawContainer = () => {
    const [prizes, setPrizes] = useState(loadPrizes);
    const [selected, setSelected] = useState(null);
    const [round, setRound] = useState(0);

    const candidates = generateCandidates(prizes);

    const handleTakePrize = () => {
        if (selected !== null) {
            setPrizes(takePrize(selected));
            setSelected(null);
            setRound(round + 1);
        }
    }

    const handleOpenPrize = (index) => {
        setSelected(index);
    }


    const active = (selected === null);

    if (!hasAnyPrizes(prizes)) {
        return <Redirect to={"/configure"} />
    }

    return (
        <div className="DrawContainer">
            <Animate play={active}>
                <div className="container" onClick={handleTakePrize}>
                    {candidates.map((chunk, i) => (
                        <div className="row" key={i}>
                            {chunk.map((prize, y) => (
                                <RedPacket key={y} {...prize} active={active} round={round} onOpen={handleOpenPrize} />
                            ))}
                        </div>
                    ))}
                </div>
            </Animate>
            <Back />
        </div>

    )
}

export default DrawContainer;
