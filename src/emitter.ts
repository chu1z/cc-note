import mitt from 'mitt'
import { ValidateFunc } from './type'

export type Events = {
    'form-item-created': ValidateFunc,
    'validate': undefined
};

export const emitter = mitt<Events>()
