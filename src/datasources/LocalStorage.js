
const LOTTERIES_STORAGE = "lotteries";

export const load = () => {
    const store = localStorage.getItem(LOTTERIES_STORAGE);
    if (!store) {
        return [];
    }
    return JSON.parse(store)
}

export const save = (lotteries) => {
    localStorage.setItem(LOTTERIES_STORAGE, JSON.stringify(lotteries));
}
