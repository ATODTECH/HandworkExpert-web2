
export type FieldName = "name" | "phone" | "email" | "message";

export interface FieldConfig {
  name: FieldName;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
}
