import styled from "styled-components";

type StatusProps = {
  error: boolean;
};

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 35em;
`;

export const BottomBar = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  button {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const Status = styled.div<StatusProps>`
  font-size: 12px;
  color: ${({ error }) => (error ? "#28a745" : "#dc3545")};
`;
