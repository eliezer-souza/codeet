import { RecipeVariants } from "@vanilla-extract/recipes";
import { iconStyle } from "./icon.css";

export const icon = (name: string, style?: RecipeVariants<typeof iconStyle>) =>
  `${name} ${iconStyle(style)}`;
