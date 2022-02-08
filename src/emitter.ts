import mitt from 'mitt'
import { ValidateFunc } from './components/form/type'

export type Events = {
    'form-item-created': ValidateFunc,
    'validate': string | undefined,
    'double-click':number
};

export const emitter = mitt<Events>()
