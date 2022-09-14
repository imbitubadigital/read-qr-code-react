export {};

declare global {
  interface Window {
    getPaymentToken: any; // 👈️ turn off type checking
  }
}
