
// 替换所有的换行符
export const replaceN = (str: string) => str.replace(/\n/g, '<br>')

export const replaceN2 = (str: string) => str.replace(/\r\n/g, '<br>')

export const replaceBr = (str: string) => str.replace(/<br>/g, '\n')

// 替换所有的空格（中文空格、英文空格都会被替换）
export const replaceSpace = (str: string) => str.replace(/\s/g, '&nbsp;')
