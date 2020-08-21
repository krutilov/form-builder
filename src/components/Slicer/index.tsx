import React from "react";

import { FormField, Label, Input, TextArea } from "./styled";

import { BuilderItem } from "../../common/types";

type SlicerProps = {
  item: BuilderItem;
};

export const Slicer = ({ item }: SlicerProps) => {
  switch (item.type) {
    case "number":
      return (
        <FormField>
          <Label>{item.label}</Label>
          <Input type="number" defaultValue={item.value} />
        </FormField>
      );

    case "textfield":
      return (
        <FormField>
          <Label>{item.label}</Label>
          <Input type="text" defaultValue={item.value} />
        </FormField>
      );

    case "textarea":
      return (
        <FormField>
          <Label>{item.label}</Label>
          <TextArea defaultValue={item.value} />
        </FormField>
      );

    case "checkbox":
      return (
        <FormField>
          <Label>
            <input type="checkbox" defaultChecked={item.checked} />
            <span>{item.label}</span>
          </Label>
        </FormField>
      );

    case "date":
      return (
        <FormField>
          <Label>{item.label}</Label>
          <Input type="date" defaultValue={item.value} />
        </FormField>
      );

    case "radio":
      return (
        <FormField>
          <Label>
            <input type="radio" defaultChecked={item.checked} />
            <span>{item.label}</span>
          </Label>
        </FormField>
      );

    default:
      return (
        <FormField>
          Unknown element. Avaliable types are: checkbox, input, textarea,
          radio, date, number
        </FormField>
      );
  }
};
