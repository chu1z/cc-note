import { createStore } from 'vuex'

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

const store = createStore({

})

export default store
