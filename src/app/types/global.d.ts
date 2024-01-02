declare module '*.scss' {
    export type IClassNames = {
        [className: string]: string;
    };
    const classNames: IClassNames;
    export default classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;