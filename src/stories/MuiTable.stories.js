import EnhancedTable from "../components/MuiTable";

export default {
  title: "StackExchangeAPI/Table",
  component: EnhancedTable,
  tags: ["autodocs"],
};

const data = [
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 2528659,
    name: "javascript",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 2191905,
    name: "python",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 1917199,
    name: "java",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 1614890,
    name: "c#",
  },
];

export const Normal = {
  args: {
    title: "Table name",
    apiData: data,
  },
};
