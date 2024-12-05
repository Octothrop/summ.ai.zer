import on_triger_action from './functions/on_triger_action';

export const functionFactory = {
  on_triger_action,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
