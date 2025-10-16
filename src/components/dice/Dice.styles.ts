import styled, { keyframes, css } from 'styled-components'

const rollAnimation = keyframes`
    0% { transform: rotate(0deg);}
    25% { transform: rotate(90deg);}
    50% { transform: rotate(180deg);}
    75% { transform: rotate(270deg);}
    100% { transform: rotate(360deg);}
`

export const DiceContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
    user-select: none;

    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.9);
    }
`

export const DiceImage = styled.img <{diceCount: number, isRolling?: boolean}>`
    width: ${({diceCount}) => (diceCount > 12 ? '70px' : '100px')};
    height: ${({diceCount}) => (diceCount > 12 ? '70px' : '100px')};
    margin: 10px;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fafbfc;
    ${({ isRolling }) => 
    isRolling && css`
        animation: ${rollAnimation} 0.4s linear;
    `
    }
`