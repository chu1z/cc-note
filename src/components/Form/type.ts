import { InjectionKey } from 'vue'

export type ValidateFunc = () => boolean;
export interface RuleProp {
  type: 'required' | 'email' | 'range';
  message?: string;
  min?: {
    message: string;
    length: number;
  };
  max?: {
    message: string;
    length: number;
  };
}
export type RulesProp = RuleProp[];

export type FormData = {
  model: { [key: string]: string }, // Record<string, unknown>
  rules?: { [key: string]: RulesProp }
}

export const formkey: InjectionKey<FormData> = Symbol('form-data')

export const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
