import { MouseEventHandler } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { FlexBar } from "../PostLayout/styles";

function Modal({
  ok,
  cancel,
  title,
  onClose
}: {
  ok: MouseEventHandler;
  cancel: MouseEventHandler;
  title?: string;
  onClose: MouseEventHandler
}) {

  return (
    <ModalOuter onClick={onClose}>
      <ModalInner>
        <ModalTitle>{title || "Modal"}</ModalTitle>
        <ModalContent>Content</ModalContent>
        <FlexBar style={{ flex: "0 0 30px", justifyContent: "flex-end" }}>
          <Button onClick={cancel} style={{ padding: 4, margin: "0px 4px" }}>
            cancel
          </Button>
          <Button onClick={ok} style={{ padding: 4, margin: "0px 4px" }}>
            save
          </Button>
        </FlexBar>
      </ModalInner>
    </ModalOuter>
  );
}

export default Modal;

const ModalOuter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(169 169 169 / 82%);
  left: 0px;
  top: 0px;
  z-index: 100;
`;

const ModalInner = styled.div`
  position: absolute;
  min-height: 300px;
  width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalContent = styled.div`
  margin: auto;
`;

const ModalTitle = styled.div`
  flex: 0 0 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
