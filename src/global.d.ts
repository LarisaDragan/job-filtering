//tell TypeScript how to handle imports of .scss files. This is done by creating a custom module declaration.

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
