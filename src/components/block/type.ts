import { InjectionKey, Ref } from 'vue'

export interface blockData {
    id: number,
    tag: string
    content: string,
    time: number
}

export const blockkey: InjectionKey<Ref<boolean>> = Symbol('block-key')
