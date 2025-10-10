import { useState } from 'react'
import { DeleteButtonContainer, Img } from './DelteButton.styles.ts'

import delete_icon_non_flick from '../../assets/delete_button/delete_icon_non_flick.png'
import delete_icon_flick from '../../assets/delete_button/delete_icon_flick.png'

type deleteButtonProps = {
    removeAllDices: () => void;
}

export default function DeleteButton({ removeAllDices }: deleteButtonProps) {
    const [isHover, setIsHover] = useState(false)

    return(
        <DeleteButtonContainer onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={() => removeAllDices()}>
            <Img src={isHover? delete_icon_flick : delete_icon_non_flick} alt={'Delete Button'}/>
        </DeleteButtonContainer>
    )
}