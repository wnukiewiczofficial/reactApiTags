import CircularProgress from "@mui/material/CircularProgress";

export default {
  title: "StackExchangeAPI/Loader Icon",
  component: CircularProgress,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      control: { type: "radio" },
    },
    size: {
      control: { type: "number", min: 50, max: 400 },
    },
  },
};

export const Normal = {
  args: {
    color: "primary",
    size: 50,
  },
};
