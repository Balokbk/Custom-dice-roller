import { useState } from 'react'
import { GlobalStyle, AppContainer, DicesContainer, ButtonCotainer } from './styles/globalStyles.ts'
import Dice from './components/dice/Dice.tsx'
import RollButton from './components/rollButton/RollButton.tsx'
import DeleteButton from './components/deleteButton/DeleteButton.tsx'
import DiceCounter from './components/diceCounter/DiceCounter.tsx'

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
    if (diceList.length >= 24) return
    const newDice: DiceData = {
      id: Date.now(),
      value: rngGerenator()
    }
    setDiceList([...diceList, newDice])
  }

  const removeDice = (id: number) => {
    setDiceList(diceList.filter((dice) => dice.id !== id))
  }

  const removeAllDices = () => {
    if (diceList.length === 0) return
    setDiceList([])
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Dice Roller</h1>
      <DiceCounter diceList={diceList}/>
      <DicesContainer>
        {diceList.map((dice) => (
          <Dice
            key={dice.id}
            id={dice.id}
            value={dice.value}
            getDiceImage={getDiceImage}
            onRemove={removeDice}
            diceList={diceList}
          />
        ))}
      </DicesContainer>
      <ButtonCotainer>
        <DeleteButton removeAllDices={() => removeAllDices()}/>
        <RollButton addDice={() => addDice()}/> 
      </ButtonCotainer>
    </AppContainer>
  )
}

export default App
