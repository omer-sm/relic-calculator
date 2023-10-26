import React from "react"
import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"

export default function TopBar() {
    return (
        <Sheet variant="soft" sx={{width: "100vw"}}>
            <Typography level="h3" sx={{margin: "0.5rem"}}>Relic Drop Calculator</Typography>
        </Sheet>
    )
}