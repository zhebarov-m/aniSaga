declare module '*.scss' {
    export type IClassNames = {
        [className: string]: string;
    };
    const classNames: IClassNames;
    export default classNames;
}
