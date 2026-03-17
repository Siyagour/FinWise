/**
 * Type declarations for @mui/x-charts so TS accepts our imports.
 * The package's typings are re-exported in a way that can fail under "bundler" resolution;
 * these declarations allow the app to type-check while using the real runtime exports.
 */
declare module '@mui/x-charts' {
  import { ComponentType } from 'react';
  export const PieChart: ComponentType<any>;
  export const LineChart: ComponentType<any>;
}

declare module '@mui/x-charts/PieChart' {
  import { ComponentType } from 'react';
  export const PieChart: ComponentType<any>;
}

declare module '@mui/x-charts/LineChart' {
  import { ComponentType } from 'react';
  export const LineChart: ComponentType<any>;
}
