import styled from "styled-components"

export const MuteContainer = styled.div`
    position: absolute;
    left: 0;
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

export const Img = styled.img`
    width: 120px;
`