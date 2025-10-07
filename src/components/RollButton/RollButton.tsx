import { useState} from 'react'
import { RollButtonContainer, Img } from './RollButton.style.ts'

import roll_button_non_flick from '../../assets/button/roll_button_non_flick.png'
import roll_button_flick from '../../assets/button/roll_button_flick.png'

type RollButtonProps = {
    addDice: () => void;
}

export default function RollButton({ addDice }: RollButtonProps) {
    const [isHover, setIsHover] = useState(false)

    return(
        <RollButtonContainer onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={() => addDice()}>
            <Img src={isHover? roll_button_flick : roll_button_non_flick} alt="Roll Button"/>
        </RollButtonContainer>
    )
}