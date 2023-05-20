import {
  ClassProp,
  ClassValue,
  StringToBoolean,
} from "node_modules/class-variance-authority/dist/types";

type ConfigSchema = Record<string, Record<string, ClassValue>>;
type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};

export type CustomVariant<T extends ConfigSchema> = (
  props?: (ConfigVariants<T> & ClassProp) | undefined
) => string;
