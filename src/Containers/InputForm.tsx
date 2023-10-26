import React from "react"
import Stack from "@mui/joy/Stack"
import RelicAmountInput from "../Components/RelicAmountInput"
import { ItemRarityInput, Rarities } from "../Components/ItemRarityInput"

interface IInputFormProps {
    radAmount: number | undefined,
    flawlessAmount: number | undefined,
    excepAmount: number | undefined,
    intAmount: number | undefined,
    setRadAmount: Function,
    setFlawlessAmount: Function,
    setExcepAmount: Function,
    setIntAmount: Function,
    desiredRarity: Rarities,
    setDesiredRarity: Function,
}

export default function InputForm(props: IInputFormProps) {
    return (
        <Stack justifyContent="center" alignItems="center" spacing={1}>
            <RelicAmountInput label="Intact" value={props.intAmount} handleChange={props.setIntAmount} />
            <RelicAmountInput label="Exceptional" value={props.excepAmount} handleChange={props.setExcepAmount} />
            <RelicAmountInput label="Flawless" value={props.flawlessAmount} handleChange={props.setFlawlessAmount} />
            <RelicAmountInput label="Radiant" value={props.radAmount} handleChange={props.setRadAmount} />
            <ItemRarityInput value={props.desiredRarity} handleChange={props.setDesiredRarity} />
        </Stack>
    )
}