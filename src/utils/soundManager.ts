type SoundKey = 'click' | 'roll' | 'delete'

const soundFiles: Record<SoundKey, string> = {
    click: 'sounds/click_sound.mp3',
    roll: 'sounds/dice_sound.mp3',
    delete: 'sounds/delete_sound.mp3'
}

const soundCooldowns: Record<SoundKey, number> = {
    click: 0,
    roll: 0,
    delete: 0
}

const COOLDOWN_MS = 130

export function playSound(type: SoundKey, soundEnabled: boolean){
    if(!soundEnabled) return

    const now = Date.now()
    if(now - soundCooldowns[type] < COOLDOWN_MS) return
    soundCooldowns[type] = now

    const audio = new Audio(soundFiles[type])
    audio.volume = 0.2
    audio.play().catch(() => {})
}