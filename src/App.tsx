import { useState, useEffect } from 'react'
import { GlobalStyle, AppContainer, DicesContainer, ButtonCotainer, Footer } from './styles/globalStyles.ts'
import Dice from './components/dice/Dice.tsx'
import RollButton from './components/rollButton/RollButton.tsx'
import DeleteButton from './components/deleteButton/DeleteButton.tsx'
import DiceCounter from './components/diceCounter/DiceCounter.tsx'
import MuteButton from './components/muteButton/MuteButton.tsx'
import SwitchButton from './components/switchButton/SwitchButton.tsx'
import { diceSets } from './data/diceSets.ts'
import { playSound } from './utils/soundManager.ts'

type DiceData = {
  id: number;
  value: number;
}

type ActiveSetKey = keyof typeof diceSets

function App() {
  const [diceList, setDiceList] = useState<DiceData[]>([])
  const [activeSet, setActiveSet] = useState<ActiveSetKey>('base')

  const [sound, setSound] = useState<boolean>(() => {
    const saved = localStorage.getItem('userMute')
    return saved? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('userMute', JSON.stringify(sound))
  }, [sound])

  function rngGerenator(): number {
    return Math.floor(Math.random() * 6) + 1
  }

  const getDiceImage = (value: number): string => {
    const faces = diceSets[activeSet].faces
    return faces[value as keyof typeof faces]
  }

  const addDice = () => {
    if (diceList.length >= 24) return
      const newDice: DiceData = {
        id: Date.now(),
        value: rngGerenator()
      }
      playSound('roll', sound)
      setDiceList([...diceList, newDice])
  }

  const removeDice = (id: number) => {
    setDiceList(diceList.filter((dice) => dice.id !== id))
  }

  const removeAllDices = (withSound: boolean = true) => {
    if (diceList.length === 0) return
    if(withSound) playSound('delete', sound)
    setDiceList([])
  }

  const toggleDiceSet = () => {
    removeAllDices(false)
    playSound('click', sound)
    setActiveSet(() => (activeSet === 'base'? 'expertise' : 'base'))
  }

  const toggleSound = () => {
    setSound(!sound)
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Dice Roller</h1>
      <MuteButton toggleSound={() => toggleSound()} sound={sound} />
      <DiceCounter diceList={diceList} diceSets={diceSets[activeSet]}/>
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
        <SwitchButton toggleDiceSet={() => toggleDiceSet()} />
      </ButtonCotainer>
      <Footer>Made by Kawan{'(Balo)'}</Footer>
    </AppContainer>
  )
}

export default App
