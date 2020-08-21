import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  max-width: 500px;
`;

export const Buttons = styled.div`
  margin-top: 24px;
  button {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;
