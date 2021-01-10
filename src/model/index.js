const STORAGE = "prizes";

const DEFAULT = [
    {name: "文具一套", count: 10},
    {name: "书籍一本", count: 10},
    {name: "免做语文作业一项", count: 3},
    {name: "免做数学作业一项", count: 3},
    {name: "免做英语作业一项", count: 3},
];

let prizes = [...DEFAULT];

export const loadPrizes = () => {
    const store = localStorage.getItem(STORAGE);
    if (!store) {
        prizes = [...DEFAULT];
        return prizes;
    }
    const values = JSON.parse(store);
    if (!Array.isArray(values)) {
        prizes = [...DEFAULT];
        return prizes;
    }
    prizes = values;
    return prizes;
}

export const savePrizes = (prizes) => {
    localStorage.setItem(STORAGE, JSON.stringify(prizes));
}

export const takePrize = (index) => {
    if (prizes[index]?.count > 0) {
        prizes = [...prizes];
        prizes[index].count -= 1
        savePrizes(prizes);
    }
    return prizes;
}

export const addPrize = () => {
    prizes = [...prizes];
    prizes.push({name: "未知礼物", count: 1})
    savePrizes(prizes);
    return prizes;
}
export const updatePrize = (index, changes) => {
    if (index < 0 || index >= prizes.length) {
        return prizes;
    }
    prizes = [...prizes];
    prizes[index] = {...prizes[index], ...changes};
    savePrizes(prizes);
    return prizes;
}

export const removePrize = (index) => {
    if (index < 0 || index >= prizes.length) {
        return prizes;
    }

    prizes = [...prizes];
    prizes.splice(index, 1);
    savePrizes(prizes);
    return prizes;
}

export const hasAnyPrizes = (prizes) => {
    if (prizes.length === 0) {
        return false;
    }
    return prizes.some(p => p.count > 0);
}
