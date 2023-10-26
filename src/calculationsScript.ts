interface IRelicChances {
    common: number,
    uncommon: number,
    rare: number,
}
const relicChances: {
    intact: IRelicChances,
    exceptional: IRelicChances,
    flawless: IRelicChances,
    radiant: IRelicChances,
} = {
    intact: {
        common: 0.76,
        uncommon: 0.22,
        rare: 0.02,
    },
    exceptional: {
        common: 0.7,
        uncommon: 0.26,
        rare: 0.04,
    },
    flawless: {
        common: 0.6,
        uncommon: 0.34,
        rare: 0.06,
    },
    radiant: {
        common: 0.5,
        uncommon: 0.4,
        rare: 0.1,
    }
}

const getChance = (chances: number[]): number => {
    return chances.length ? chances.reduce((acc, current) => acc + (1-acc)*current) : 0
}

const toPercentage = (val: number): number => {return val * 100}

export {relicChances, getChance, toPercentage}

