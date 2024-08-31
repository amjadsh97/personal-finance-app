import {iconnavbudgets, iconnavoverview, iconnavpots, iconnavrecurringbills, iconnavtransactions} from "../icon";
import {NavProps} from "./types.ts";

export const navList:NavProps[] = [
  {
    icon: iconnavoverview,
    path: "/",
    label: "Overview"
  },
  {
    icon: iconnavtransactions,
    path: "/transactions",
    label: "Transactions"
  },
  {
    icon: iconnavbudgets,
    path: "/budgets",
    label: "Budgets"
  },
  {
    icon: iconnavpots,
    path: "/pots",
    label: "Pots"
  },
  {
    icon: iconnavrecurringbills,
    path: "/recurring-bills",
    label: "Recurring Bills"
  },
]