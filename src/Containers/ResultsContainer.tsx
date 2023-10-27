import React from "react"
import Typography from "@mui/joy/Typography"
import Stack from "@mui/joy/Stack"
import { Rarities } from "../Components/ItemRarityInput"

interface IResultsContainerProps {
    specificItemChance: number,
    anyItemChance: number,

}

export default function ResultsContainer({ specificItemChance, anyItemChance, }: IResultsContainerProps) {
    return (
        <Stack spacing={1}>
            <Typography level="h4">Any item: {anyItemChance.toFixed(1)}%</Typography>
            <Typography level="body-xs">{anyItemChance}%</Typography>
            <Typography level="h4">Specific item: {specificItemChance.toFixed(1)}%</Typography>
            <Typography level="body-xs">{specificItemChance}%</Typography>
        </Stack>
    )
}