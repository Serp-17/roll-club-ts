declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  export default "" as string;
}

declare module "*.webp" {
  export default "" as string;
}

declare module "clsx" {
  type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

  interface ClassDictionary {
    [id: string]: any;
  }

  interface ClassArray extends Array<ClassValue> {}

  type ClassNamesFn = (...classes: ClassValue[]) => string;

  type ClassNamesExport = ClassNamesFn & { default: ClassNamesFn };

  const classNames: ClassNamesExport;

  export = classNames;
}
