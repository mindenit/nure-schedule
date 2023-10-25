type PipeFunction<T> = (value: T) => T;

export function pipe<T>(value: T, ...fns: PipeFunction<T>[]) {
    let result = value;

    for (let i = 0; i < fns.length; i++) {
        result = fns[i](result);
    }

    return result;
}
