import styled from "styled-components"

const Div = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-left: 24%;
    padding: 10px;
    flex-direction: row;

    &:hover {
        border: 1px red solid;
        transition: 2s;
    }

   
`



export default Div;