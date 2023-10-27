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
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from "@mui/joy/IconButton"

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
      obj.rad = parseInt(radAmount ? radAmount : "0")
    }
    if (typeof flawlessAmount === "string") {
      obj.flaw = parseInt(flawlessAmount ? flawlessAmount : "0")
    }
    if (typeof excepAmount === "string") {
      obj.excep = parseInt(excepAmount ? excepAmount : "0")
    }
    if (typeof intAmount === "string") {
      obj.int = parseInt(intAmount ? intAmount : "0")
    }
    let [a, b] = getProbability(desiredRarity, obj.rad, obj.flaw, obj.excep, obj.int)
    setChance(a)
    setSpecificChance(b)
  }, [radAmount, flawlessAmount, excepAmount, intAmount, desiredRarity])
  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet variant="outlined" sx={{ height: "100vh", border: "none", background: `url(${bg})`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
        <Stack justifyContent="flex-start" alignItems="center" spacing={4}>
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
        <Stack sx={{my: 4}} direction="row" spacing={1} alignItems="center">
          <Typography level="body-sm" sx={{height: "fit-content"}}>Made by Omer Smorodinsky. </Typography>
          <IconButton variant="plain" component="a" href="https://github.com/omer-sm/wf-relics-probability" target="_blank"><GitHubIcon/></IconButton>
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App