type Array1 = ['b', 'a', 'c']
const Ar1: Array1 = ['b', 'd', 'c'];

type StringSplitter<Str extends string, Sep extends string> =
    Str extends `${infer R1}${Sep}${infer RRest}`
        ? [R1, ...StringSplitter<RRest, Sep>]
        : [Str]

type Split = StringSplitter<'hello.world.again', '.'>
