import { Rarities } from "./Components/ItemRarityInput"

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

const getProbability = (desiredRarity: Rarities, radAmount: number, 
                        flawlessAmount: number, excepAmount: number, intAmount: number) => {
    let total = (1-relicChances.radiant[desiredRarity])**radAmount
    total *= (1-relicChances.flawless[desiredRarity])**flawlessAmount
    total *= (1-relicChances.exceptional[desiredRarity])**excepAmount
    total *= (1-relicChances.intact[desiredRarity])**intAmount
    let specificProbDenominator = 1
    let specific = total
    if (desiredRarity !== "rare") {
        specificProbDenominator = desiredRarity === "uncommon" ? 2 : 3
        specific = (1-relicChances.radiant[desiredRarity]/specificProbDenominator)**radAmount
        specific *= (1-relicChances.flawless[desiredRarity]/specificProbDenominator)**flawlessAmount
        specific *= (1-relicChances.exceptional[desiredRarity]/specificProbDenominator)**excepAmount
        specific *= (1-relicChances.intact[desiredRarity]/specificProbDenominator)**intAmount
    }
    
    return [1-total, 1-specific]
}

const toPercentage = (val: number): number => {return val * 100}

export {relicChances, toPercentage, getProbability}

