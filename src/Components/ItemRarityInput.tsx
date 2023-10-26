import React from "react"
import Button from "@mui/joy/Button"
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup"
import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"

export type Rarities = "common" | "uncommon" | "rare"

interface IItemRarityInputProps {
    value: Rarities,
    handleChange: Function,
    
}

export function ItemRarityInput({value, handleChange, }: IItemRarityInputProps) {
    return (
        <FormControl>
            <FormLabel>Desired rarity</FormLabel>
            <ToggleButtonGroup value={value} onChange={(e, newValue) => {handleChange(newValue)}}>
                <Button value="common" sx={(theme) => ({color: theme.vars.palette.warning[500]})}>Common</Button>
                <Button value="uncommon" sx={(theme) => ({color: theme.vars.palette.neutral[400]})}>Uncommon</Button>
                <Button value="rare" sx={(theme) => ({color: theme.vars.palette.warning[300]})}>Rare</Button>
            </ToggleButtonGroup>
        </FormControl>
    )
}