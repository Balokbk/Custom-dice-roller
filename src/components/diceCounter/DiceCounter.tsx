import { useState, useEffect } from 'react';

import { CounterContainer, CounterItem, Img } from './DiceCounter.styles.ts';

import critFail from '../../assets/dice/critFail.png'
import fail from '../../assets/dice/fail.png'
import success from '../../assets/dice/success.png'
import critSuccess from '../../assets/dice/critSuccess.png'

type DiceCounterProps = {
    diceList: { id: number; value: number }[];
}

export default function DiceCounter({ diceList }: DiceCounterProps){
    const[count, setCount] = useState({ cf: 0, f: 0, s:0, cs:0 })
    
    useEffect(() => {
        let cf = 0, f = 0, s = 0, cs = 0

        diceList.forEach(dice => {
            switch(dice.value){
                case 1: cf++; break;
                case 2:
                case 3: f++; break;
                case 4:
                case 5: s++; break;
                case 6: cs++; break;
                default: break;
            }
        })
        setCount({ cf, f, s, cs })
    }, [diceList])

    return (
        <CounterContainer>
            <CounterItem>
                <Img src={critFail} alt='Critical Fail'/>
                <p>{count.cf}</p>
            </CounterItem>
            <CounterItem>
                <Img src={fail} alt='Fail'/>
                <p>{count.f}</p>
            </CounterItem>
            <CounterItem>
                <Img src={success} alt='Success'/>
                <p>{count.s}</p>
            </CounterItem>
            <CounterItem>
                <Img src={critSuccess} alt='Critical Success'/>
                <p>{count.cs}</p>
            </CounterItem>
            <CounterItem>
                <p>Total: {count.cf + count.f + count.s + count.cs}</p>
            </CounterItem>
        </CounterContainer>
    )
}