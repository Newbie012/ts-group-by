type GroupedBy<T, K> = K extends [infer K0, ...infer KR]
    ? Map<T[Extract<K0, keyof T>], GroupedBy<T, KR>>
    : T[];

// call signature
export function groupBy<T, K extends Array<keyof T>>(
    objects: readonly T[],
    ...by: [...K]
): GroupedBy<T, K>;

export function groupBy<T, K extends Array<keyof T>>(
    objects: readonly T[],
    ...by: [...K]
): GroupedBy<T, K> {
    if (by.length === 0) {
        return objects as GroupedBy<T, K>;
    }

    const [k0, ...kr] = by;
    const topLevelGroups = new Map<T[K[0]], T[]>();
    for (const obj of objects) {
        const k = obj[k0];
        let arr = topLevelGroups.get(k);
        if (!arr) {
            arr = [];
            topLevelGroups.set(k, arr);
        }
        arr.push(obj);
    }
    return new Map(Array.from(topLevelGroups, ([k, v]) => [k, groupBy(v, ...kr)])) as GroupedBy<
        T,
        K
    >;
}

const data = [
    { agency: "Agency A", patient: "Carol baskin", gender: "F" },
    { agency: "Agency A", patient: "Carol baskin", gender: "F" },
    { agency: "Agency A", patient: "Esther Friedman", gender: "M" },
    { agency: "Agency A", patient: "Zaritskaia Raia", gender: "M" },
    { agency: "Agency B", patient: "Judy Gottesman", gender: "F" },
];

const a = groupBy(data, "agency", "gender");

console.log(a.get("Agency B"));



