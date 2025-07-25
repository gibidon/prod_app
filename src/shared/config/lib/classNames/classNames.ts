export type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: Array<string> = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => value === true)
            .map(([className]) => className),
    ].join(' ');
}
