import React from "react";
import { StyledButton } from "./styled";

type ButtonProps = {
  title: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
};

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {title}
    </StyledButton>
  );
};
