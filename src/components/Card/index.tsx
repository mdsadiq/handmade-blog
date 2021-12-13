import styled from "styled-components";

const Card = styled.div`
    margin: 24px;
    padding: 10px;
    text-align: left;
    border: 2px solid #3c3c3c;
    min-width: 200px;
    height: 250px;
`
const CardTitle = styled.div`
    font-weight: bold;
`

const CardList = styled.div`
    margin: 4px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
export {
    Card,
    CardTitle,
    CardList,
}