import React from "react"
import Typography from "@mui/joy/Typography"
import Stack from "@mui/joy/Stack"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from "@mui/joy/Tooltip"

interface IResultsContainerProps {
    specificItemChance: number,
    anyItemChance: number,
}

export default function ResultsContainer({ specificItemChance, anyItemChance, }: IResultsContainerProps) {
    return (
        <Stack spacing={1}>
            <Stack sx={{my: 4}} direction="row" spacing={1} alignItems="center">
            <Typography level="h4">Any item: {anyItemChance.toFixed(1)}%</Typography>
            <Tooltip title="The probability of getting at least a single copy of any item with the desired rarity." placement="top" arrow variant="soft">
                <InfoOutlinedIcon/>
            </Tooltip>
            </Stack>
            <Typography level="body-xs">{anyItemChance}%</Typography>
            <Stack sx={{my: 4}} direction="row" spacing={1} alignItems="center">
            <Typography level="h4">Specific item: {specificItemChance.toFixed(1)}%</Typography>
            <Tooltip title="The probability of getting at least a single copy of a specific item with the desired rarity." placement="top" arrow variant="soft">
                <InfoOutlinedIcon/>
            </Tooltip>
            </Stack>
            <Typography level="body-xs">{specificItemChance}%</Typography>
        </Stack>
    )
}