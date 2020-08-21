import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border: 0;
  cursor: pointer;
  background: #007bff;
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
  transition: background 0.3s;
  &:hover {
    background: #0069d9;
  }
  &:disabled {
    opacity: 0.3;
  }
`;
