import { InjectionKey } from 'vue'

export interface BlockData {
    id: number,
    tag: string
    content: string,
    time: number
}

export type BlockDatas=BlockData[]

export type BlockStateData = {
    needOpen: boolean, // 是否需要展开
    isOpen: boolean, // 是否展开了 前置需要needOpen
    isEdit: boolean, // 是否处于编辑状态
    canClick:boolean, // 是否能点击
}

export const blockkey: InjectionKey<BlockStateData | undefined> = Symbol('block-key')
