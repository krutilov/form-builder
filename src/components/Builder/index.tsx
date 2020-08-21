import React from "react";

import { Slicer } from "../Slicer";
import { Button } from "../Button";
import { Wrapper, Buttons } from "./styled";

import { Form } from "../../common/types";

export const Builder = ({ title, items, buttons }: Form) => {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      {items
        ? items.map((item, index) => <Slicer item={item} key={index}></Slicer>)
        : "No items :( Please specify items array"}
      {buttons && (
        <Buttons>
          {buttons.map((button, index) => (
            <Button key={index} title={button.title}></Button>
          ))}
        </Buttons>
      )}
    </Wrapper>
  );
};
