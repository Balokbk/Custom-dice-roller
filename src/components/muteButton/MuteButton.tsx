import { MuteContainer, Img } from './MuteButton.style.ts'

import sound_image from '../../assets/mute_button/sound_image.png'
import mute_image from '../../assets/mute_button/mute_image.png'

type MuteButtonProps = {
    toggleSound: () => void,
    sound: boolean
}

export default function MuteButton({toggleSound, sound}: MuteButtonProps){
    return (
        <MuteContainer onClick={() => toggleSound()}>
            <Img src={sound ? sound_image : mute_image}/>
        </MuteContainer>
    )
}