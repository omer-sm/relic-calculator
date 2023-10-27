import React from "react"
import Stack from "@mui/joy/Stack"
import RelicAmountInput from "../Components/RelicAmountInput"
import { ItemRarityInput, Rarities } from "../Components/ItemRarityInput"
import Divider from "@mui/joy/Divider"
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded"
import IconButton from "@mui/joy/IconButton"
import Tooltip from "@mui/joy/Tooltip"
import Typography from "@mui/joy/Typography"


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
    const [clearButtonHovered, setClearButtonHovered] = React.useState(false)
    const resetAll = () => {
        props.setIntAmount("")
        props.setExcepAmount("")
        props.setFlawlessAmount("")
        props.setRadAmount("")
    }
    return (
        <Stack justifyContent="center" alignItems="center" spacing={1}>
            <Typography textAlign="start" sx={{width: "100%"}} >Relic amounts:</Typography>
            <RelicAmountInput label="Intact" value={props.intAmount} handleChange={props.setIntAmount} />
            <RelicAmountInput label="Exceptional" value={props.excepAmount} handleChange={props.setExcepAmount} />
            <RelicAmountInput label="Flawless" value={props.flawlessAmount} handleChange={props.setFlawlessAmount} />
            <RelicAmountInput label="Radiant" value={props.radAmount} handleChange={props.setRadAmount} />
            <Divider/>
            <Stack sx={{width: "100%", alignItems: "flex-end"}} direction="row">
                <ItemRarityInput value={props.desiredRarity} handleChange={props.setDesiredRarity} />
                <Divider orientation="vertical" sx={{margin: "1.5rem 1rem 0.1rem"}} />
                <Tooltip title="Reset" variant="soft" color="danger">
                    <IconButton onClick={resetAll}
                        onMouseEnter={() => {setClearButtonHovered(true)}} onMouseLeave={() => {setClearButtonHovered(false)}} 
                        sx={{height: "50%"}} color="danger" variant="soft">
                        <RefreshRoundedIcon sx={{transitionDuration: "400ms", transform: clearButtonHovered ? "rotateZ(360deg) scale(1.1)" : "rotateZ(0deg) scale(1)"}}/>
                    </IconButton>
                </Tooltip>
            </Stack>
        </Stack>
    )
}