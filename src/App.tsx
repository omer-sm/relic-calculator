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
import { toPercentage, getProbability } from './calculationsScript'
import bg from "./bg.svg"

function App() {
  const [radAmount, setRadAmount] = React.useState<number>()
  const [flawlessAmount, setFlawlessAmount] = React.useState<number>()
  const [excepAmount, setExcepAmount] = React.useState<number>()
  const [intAmount, setIntAmount] = React.useState<number>()
  const [desiredRarity, setDesiredRarity] = React.useState<Rarities>("rare")
  const [chance, setChance] = React.useState(0)
  const [specificChance, setSpecificChance] = React.useState(0)
  React.useEffect(() => {
    const obj = {
      rad: 0,
      flaw: 0, 
      excep: 0,
      int: 0,
    }
    if (typeof radAmount === "string") {
      obj.rad = parseInt(radAmount)
    }
    if (typeof flawlessAmount === "string") {
      obj.flaw = parseInt(flawlessAmount)
    }
    if (typeof excepAmount === "string") {
      obj.excep = parseInt(excepAmount)
    }
    if (typeof intAmount === "string") {
      obj.int = parseInt(intAmount)
    }
    let [a, b] = getProbability(desiredRarity, obj.rad, obj.flaw, obj.excep, obj.int)
    setChance(a)
    setSpecificChance(b)
  }, [radAmount, flawlessAmount, excepAmount, intAmount, desiredRarity])
  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet variant="outlined" sx={{ height: "100vh", border: "none", background: `url(${bg})` }}>
        <Stack justifyContent="center" alignItems="center" spacing={4}>
          <TopBar />
          <Typography level="h2" textAlign="center">Relic Item Drop Calculator</Typography>
          <Card sx={{ minWidth: "min(50rem, 90%)", width: "fit-content"}}>
            <InputForm radAmount={radAmount} flawlessAmount={flawlessAmount}
              excepAmount={excepAmount} intAmount={intAmount}
              setRadAmount={setRadAmount} setFlawlessAmount={setFlawlessAmount}
              setExcepAmount={setExcepAmount} setIntAmount={setIntAmount}
              desiredRarity={desiredRarity} setDesiredRarity={setDesiredRarity} />
            <Divider />
            <ResultsContainer anyItemChance={toPercentage(chance)} specificItemChance={toPercentage(specificChance)}/>
          </Card>
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App