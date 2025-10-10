import styled from "styled-components"

export const CounterContainer = styled.div`
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 120px;
    height: auto 0;
    padding: 10px;
    gap: 10px;
    background-color: #2b3137;
    border-bottom-left-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

export const CounterItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    color: white;

    p {
        margin-left: 15px;
        font-size: 20px;
    }
`

export const Img = styled.img`
    width: 30px;
`