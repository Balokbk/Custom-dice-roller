import { useState, useEffect } from 'react'
import { CounterContainer, CounterItem, Img } from './DiceCounter.styles.ts'
import type { DiceFaceMap } from '../../data/diceSets.ts'

type DiceCounterProps = {
    diceList: { id: number; value: number }[];
    diceSets: {
        name: string;
        faces: DiceFaceMap;
        faceNames: DiceFaceMap;
    }
}

export default function DiceCounter({ diceList, diceSets }: DiceCounterProps) {
  const [count, setCount] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  useEffect(() => {
    const newCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

    diceList.forEach((dice) => {
        newCounts[dice.value as keyof DiceFaceMap]++
    });

    setCount(newCounts);
  }, [diceList]);

  const mergedCounts: Record<string, { img: string, total: number }> = {};
  (Object.keys(count) as unknown as (keyof DiceFaceMap)[]).forEach((faceValue) => {
    const name = diceSets.faceNames[faceValue]
    const img = diceSets.faces[faceValue]
    const total = count[faceValue] || 0

    if(mergedCounts[name]){
        mergedCounts[name].total += total
    } else {
        mergedCounts[name] = { img, total }
    }
  })
  
  const total = Object.values(mergedCounts).reduce((sum, item) => sum + item.total, 0)

  return (
    <CounterContainer>
      {Object.entries(mergedCounts).map(([name, data]) => (
        <CounterItem key={name}>
          <Img src={data.img} alt={name} />
          <p>{name}</p>
          <div>{data.total}</div>
        </CounterItem>
      ))}
      <CounterItem>
        <p style={{ marginLeft: '46px' }}>Total</p>
        <div>{total}</div>
      </CounterItem>
    </CounterContainer>
  );
}