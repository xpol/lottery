import {useHistory} from "react-router-dom";
import {FiMinusCircle, FiPlayCircle, FiPlusCircle} from "react-icons/fi";

import Row from "./Row"

import "./LotteryView.css"
import {hasAnyPrizes} from "../model";

const LotteryView = ({name, prizes, onAdd, onUpdate, onDelete}) => {
    const history = useHistory();
    const handleChange = (index) => (e) => {
        const name = e.target.value;
        const field = e.target.name;
        onUpdate(index, {[field]: name})
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
                <tbody>
                {
                    prizes.map(({name, count}, index) => {
                        const onChange = handleChange(index);
                        return (
                            <tr key={index}>
                                <td>
                                    <input name="name" value={name} onChange={onChange} />
                                </td>
                                <td>
                                    <input name="count" type="number" max={99} value={count} onChange={onChange} />
                                </td>
                                <td>
                                    <div className="button" onClick={handleDelete(index)}>
                                        <FiMinusCircle size="4vh" color={"red"} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
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
