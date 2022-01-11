export interface RequestHelperTypes {
  endpoint: string;
  token?: string | null;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: Record<string, unknown> | BodyInit | unknown;
}
