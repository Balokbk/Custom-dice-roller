import { DiceContainer, DiceImage } from './Dice.styles.ts'

type DiceProps = {
    id: number;
    value: number;
    diceList: {id: number; value: number}[];
    onRemove: (id: number) => void;
    getDiceImage: (value: number) => string;
}

export default function Dice({ id, value, onRemove, getDiceImage, diceList }: DiceProps){
    return(
        <DiceContainer onClick={() => onRemove(id)}>
            <DiceImage src={getDiceImage(value)} alt={`Dice ${value}`} diceCount={diceList.length}/>
        </DiceContainer>
    )
}