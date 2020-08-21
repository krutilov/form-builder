export type BuilderItem = {
  type: "number" | "textfield" | "textarea" | "checkbox" | "date" | "radio";
  label: string;
  value: string;
  checked?: boolean;
};

export type Button = {
  title: string;
};

export type Form = {
  title?: string;
  items: BuilderItem[];
  buttons?: Button[];
};
