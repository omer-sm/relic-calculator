import React from "react"
import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"

interface IRelicAmountInputProps {
    value: number | undefined,
    handleChange: Function,
    label: string,
}

export default function RelicAmountInput({value, handleChange, label}: IRelicAmountInputProps) {
    return (
        <FormControl sx={{width: "100%"}}>
                    <FormLabel>{label}</FormLabel>
                    <Input
                        type="number"
                        value={value}
                        onChange={(e) => {handleChange(e.target.value)}}
                        variant="soft"
                        placeholder="0"
                        sx={{
                            '--Input-radius': '0px',
                            borderBottom: '2px solid',
                            borderColor: 'neutral.outlinedBorder',
                            '&:hover': {
                                borderColor: 'neutral.outlinedHoverBorder',
                            },
                            '&::before': {
                                border: '1px solid var(--Input-focusedHighlight)',
                                transform: 'scaleX(0)',
                                left: 0,
                                right: 0,
                                bottom: '-2px',
                                top: 'unset',
                                transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                borderRadius: 0,
                            },
                            '&:focus-within::before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    />
                </FormControl>
    )
}