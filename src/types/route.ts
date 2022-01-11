import { ComponentType } from "react";

export interface IRoute {
  path: string;
  label: string;
  exact: boolean;
  component: ComponentType | any;
  private: boolean;
  restricted: boolean;
}
