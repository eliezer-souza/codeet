import { RecipeVariants } from "@vanilla-extract/recipes";
import { icon_style } from "./icon.css";

export const icon = (name: string, style?: RecipeVariants<typeof icon_style>) =>
  `${name} ${icon_style(style)}`;
