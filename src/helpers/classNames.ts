export type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: Array<string>): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([key,value]) => value === true)
            .map(([className]) => className)
    ].join(' ')
}