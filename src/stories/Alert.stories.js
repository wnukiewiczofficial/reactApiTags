import { Alert } from "@mui/material";

export default {
  title: "StackExchangeAPI/Alert Box",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      control: { type: "radio" },
    },
    severity: {
      options: ["error", "info", "success", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["filled", "outlined", "standard"],
      control: { type: "radio" },
    },
  },
};

export const Normal = {
  args: {
    children: "Pojawił się błąd",
    color: "error",
    variant: "filled",
    severity: "error",
  },
};
