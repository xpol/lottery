import {useHistory} from "react-router-dom";
import {FiMinusCircle, FiPlayCircle, FiPlusCircle} from "react-icons/fi";

import Row from "./Row"

import "./LotteryView.css"
import {hasAnyPrizes, totalPrizes} from "../model";

const LotteryView = ({name, prizes, onAdd, onUpdate, onDelete}) => {
    const history = useHistory();
    const handleNameChange = (index) => (e) => {
        const name = e.target.value;
        onUpdate(index, {name})
    }

    const handleCountChange = (index) => (e) => {
        const name = e.target.value;
        onUpdate(index, {count: parseInt(name, 10)})
    }

    const handleDelete = (index) => (e) => {
        if (window.confirm(`确定要删除奖品：${prizes[index].name}`)) {
            onDelete(index);
        }
    }

    const handleStart = (e) => {
        if (hasAnyPrizes(prizes)) {
            history.push("/draw");
        } else {
            window.alert("奖品已经抽完");
        }
    }


    return (
        <div className="LotteryView">
            <h1 className="title">{name}</h1>
            <table>
                <thead>
                <tr>
                    <th>奖品</th>
                    <th>数量</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    prizes.map(({name, count}, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    name="name"
                                    placeholder="奖品名称"
                                    value={name}
                                    onChange={handleNameChange(index)}
                                />
                            </td>
                            <td>
                                <input
                                    name="count"
                                    type="number"
                                    max={99}
                                    value={count}
                                    onChange={handleCountChange(index)}
                                />
                            </td>
                            <td>
                                <div className="button" onClick={handleDelete(index)}>
                                    <FiMinusCircle size="4vh" color={"red"} />
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                <tr>
                    <th>共计：</th>
                    <td>{totalPrizes(prizes)}</td>
                </tr>
                </tfoot>
            </table>
            <Row>
                <div className="button" onClick={onAdd}>
                    <FiPlusCircle size="5vh" color="#c3a26e" />
                </div>
                <div className="button" onClick={handleStart}>
                    <FiPlayCircle size="5vh" color="green" />
                </div>
            </Row>
        </div>
    )
}

export default LotteryView;
