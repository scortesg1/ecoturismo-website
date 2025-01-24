export {};

declare global {
  interface Window {
    WompiWidget: {
      open: () => void;
    };
  }
}
