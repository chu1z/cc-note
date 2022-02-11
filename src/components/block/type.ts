import { InjectionKey } from 'vue'

export interface BlockData {
    id: number,
    tag: string
    content: string,
    time: number
}

export type BlockStateData = {
    isMax: boolean, // 是否能包裹全部内容
    isOpen: boolean, // 是否展开了 前置需要isMax为false
    isEdit: boolean, // 是否处于编辑状态
    canClick:boolean, // 是否能点击
}

export const blockkey: InjectionKey<BlockStateData | undefined> = Symbol('block-key')
