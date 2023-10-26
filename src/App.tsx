import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from "@mui/joy/Sheet"
import Stack from "@mui/joy/Stack"
import TopBar from './Components/TopBar'
import Typography from "@mui/joy/Typography"
import InputForm from './Containers/InputForm'
import { Rarities } from './Components/ItemRarityInput'
import Divider from "@mui/joy/Divider"
import ResultsContainer from './Containers/ResultsContainer'
import Card from "@mui/joy/Card"
import { relicChances, getChance, toPercentage } from './calculationsScript'

function App() {
  const [radAmount, setRadAmount] = React.useState<number>()
  const [flawlessAmount, setFlawlessAmount] = React.useState<number>()
  const [excepAmount, setExcepAmount] = React.useState<number>()
  const [intAmount, setIntAmount] = React.useState<number>()
  const [desiredRarity, setDesiredRarity] = React.useState<Rarities>("rare")
  const [chance, setChance] = React.useState(0)
  React.useEffect(() => {
    const totalRolls: number[] = []
    if (typeof radAmount === "string") {
      for(let i = 0; i < parseInt(radAmount); i++){
        totalRolls.push(relicChances.radiant[desiredRarity])
      }
    }
    if (typeof flawlessAmount === "string") {
      for(let i = 0; i < parseInt(flawlessAmount); i++){
        totalRolls.push(relicChances.flawless[desiredRarity])
      }
    }
    if (typeof excepAmount === "string") {
      for(let i = 0; i < parseInt(excepAmount); i++){
        totalRolls.push(relicChances.exceptional[desiredRarity])
      }
    }
    if (typeof intAmount === "string") {
      for(let i = 0; i < parseInt(intAmount); i++){
        totalRolls.push(relicChances.intact[desiredRarity])
      }
    }
    setChance(getChance(totalRolls))
  }, [radAmount, flawlessAmount, excepAmount, intAmount, desiredRarity])
  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet variant="outlined" sx={{ height: "100vh", border: "none" }}>
        <Stack justifyContent="center" alignItems="center" spacing={4}>
          <TopBar />
          <Typography level="h2">Relic Item Drop Calculator</Typography>
          <Card>
            <InputForm radAmount={radAmount} flawlessAmount={flawlessAmount}
              excepAmount={excepAmount} intAmount={intAmount}
              setRadAmount={setRadAmount} setFlawlessAmount={setFlawlessAmount}
              setExcepAmount={setExcepAmount} setIntAmount={setIntAmount}
              desiredRarity={desiredRarity} setDesiredRarity={setDesiredRarity} />
            <Divider />
            <ResultsContainer anyItemChance={toPercentage(chance)} rarity={desiredRarity} />
          </Card>
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App