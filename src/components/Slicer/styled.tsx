import styled from "styled-components";

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 16px;
  font-size: 16px;
  font-family: inherit;
`;
