import mitt from 'mitt'
import { ValidateFunc } from './type'

export type Events = {
    'form-item-created': ValidateFunc,
    'validate': string | undefined
};

export const emitter = mitt<Events>()
