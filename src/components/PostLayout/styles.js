import styled from "styled-components";


const FlexBar = styled.div`
  margin: 10px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const CommentsList = styled.div`
  margin: 10px;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const CommentBox = styled.div`
    border: 2px solid #3c3c3c;
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
`
const CommentBody = styled.div`
    margin: 15px 10px;
    text-align: left;
`

export {
    FlexBar,
    CommentsList,
    CommentBox,
    CommentBody
}
