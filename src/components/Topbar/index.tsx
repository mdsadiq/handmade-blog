import { MouseEventHandler } from "react";
import styled from "styled-components";

function Topbar({ username, openModal }: { username: string, openModal: MouseEventHandler }) {
  const goBack = () => {

  }
  return (
    <NavBar>
      <div onClick={goBack} style={{cursor: 'pointer'}}>Back</div>
      <h3> {username} </h3>
      <div onClick={openModal} style={{cursor: 'pointer'}}>Add</div>
    </NavBar>
  );
}

export default Topbar;

const NavBar = styled.div`
  margin: 0px 10px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
