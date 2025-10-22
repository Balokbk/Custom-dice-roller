import { useState } from 'react'
import { SwitchButtonContainer, Img } from './SwitchButton.style'

import switch_button_non_flick from '../../assets/switch_button/switch_button_non_flick.png'
import switch_button_flick from '../../assets/switch_button/switch_button_flick.png'

type SwitchButtonProps = {
    toggleDiceSet: () => void;
}

export default function SwitchButton({ toggleDiceSet }: SwitchButtonProps) {
    const [isHover, setIsHover] = useState(false)
    
    return(
        <SwitchButtonContainer onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={() => toggleDiceSet()}>
            <Img src={isHover? switch_button_flick : switch_button_non_flick} alt={'Switch Button'}/>
        </SwitchButtonContainer>
    )
}