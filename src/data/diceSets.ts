import critFail from '../assets/dice/critFail.png'
import fail from '../assets/dice/fail.png'
import success from '../assets/dice/success.png'
import critSuccess from '../assets/dice/critSuccess.png'

import add from '../assets/dice/add.png'
import subtract from '../assets/dice/subtract.png'
import assistance from '../assets/dice/assistance.png'
import suport from '../assets/dice/support.png'
import potency from '../assets/dice/potency.png'
import explode from '../assets/dice/explode.png'

export type DiceFaceMap = Record<number, string>

type DiceSet = {
    name: string,
    faces: DiceFaceMap
    faceNames: DiceFaceMap
}

export const diceSets: Record<'base' | 'expertise', DiceSet> = {
    base: {
        name: 'Base Dices',
        faces: {
            1: critFail,
            2: fail,
            3: fail,
            4: success,
            5: success,
            6: critSuccess
        },
        faceNames: {
            1: 'Critical Fail',
            2: 'Fail',
            3: 'Fail',
            4: 'Success',
            5: 'Success',
            6: 'Critical Success'
        }
    },
    expertise: {
        name: 'Expertise Dices',
        faces: {
            1: add,
            2: subtract,
            3: assistance,
            4: suport,
            5: potency,
            6: explode
        },
        faceNames: {
            1: 'Add',
            2: 'Subtract',
            3: 'Assistance',
            4: 'Suport',
            5: 'Potency',
            6: 'Explode'
        }
    }
}