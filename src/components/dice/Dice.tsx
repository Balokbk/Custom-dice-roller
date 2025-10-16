import { useEffect, useState } from 'react'
import { DiceContainer, DiceImage } from './Dice.styles.ts'

type DiceProps = {
    id: number;
    value: number;
    diceList: {id: number; value: number}[];
    onRemove: (id: number) => void;
    getDiceImage: (value: number) => string;
}

export default function Dice({ id, value, onRemove, getDiceImage, diceList }: DiceProps){
    const [isRolling, setIsRolling] = useState(true)
    
    useEffect(() => {
        const timeout = setTimeout(() => setIsRolling(false), 250)
        return () => clearTimeout(timeout)
    })

    return(
        <DiceContainer onClick={() => onRemove(id)}>
            <DiceImage src={getDiceImage(value)} alt={`Dice ${value}`} diceCount={diceList.length} isRolling={isRolling}/>
        </DiceContainer>
    )
}