import React from "react"
import Typography from "@mui/joy/Typography"
import Stack from "@mui/joy/Stack"
import { Rarities } from "../Components/ItemRarityInput"

interface IResultsContainerProps {
    rarity: Rarities,
    anyItemChance: number,
}

export default function ResultsContainer({ rarity, anyItemChance, }: IResultsContainerProps) {
    let specificItemChance = anyItemChance
    switch (rarity) {
        case "common":
            specificItemChance /= 3
            break
        case "uncommon":
            specificItemChance /= 2
            break
    }
    return (
        <Stack spacing={1}>
            <Typography level="h4">Any item: {anyItemChance.toFixed(1)}%</Typography>
            <Typography level="body-xs">{anyItemChance}%</Typography>
            <Typography level="h4">Specific item: {specificItemChance.toFixed(1)}%</Typography>
            <Typography level="body-xs">{specificItemChance}%</Typography>
        </Stack>
    )
}