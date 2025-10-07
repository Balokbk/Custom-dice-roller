import { useState } from 'react'
import { GlobalStyle, AppContainer } from './styles/globalStyles'
import Dice from './components/Dice/Dice.tsx'
import RollButton from './components/RollButton/RollButton.tsx'

import crtiFail from './assets/dice/critFail.png'
import fail from './assets/dice/fail.png'
import success from './assets/dice/success.png'
import crtiSuccess from './assets/dice/critSuccess.png'

type DiceData = {
  id: number;
  value: number;
}

const diceImgs = {
  1: crtiFail,
  2: fail,
  3: fail,
  4: success,
  5: success,
  6: crtiSuccess
}

function App() {
  const [diceList, setDiceList] = useState<DiceData[]>([])

  function rngGerenator(): number {
    return Math.floor(Math.random() * 6) + 1
  }

  const getDiceImage = (value: number): string => {
    return diceImgs[value as keyof typeof diceImgs]
  }

  const addDice = () => {
    const newDice: DiceData = {
      id: Date.now(),
      value: rngGerenator()
    }
    setDiceList([...diceList, newDice])
  }

  const removeDice = (id: number) => {
    setDiceList(diceList.filter((dice) => dice.id !== id))
  }
  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Dice Roller</h1>
      <RollButton addDice={() => addDice()}/> 
      <div>
        {diceList.map((dice) => (
          <Dice
            key={dice.id}
            id={dice.id}
            value={dice.value}
            getDiceImage={getDiceImage}
            onRemove={removeDice}
          />
        ))}
      </div>
    </AppContainer>
  )
}

export default App
