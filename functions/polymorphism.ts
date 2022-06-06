interface generic {
    <T>(arg: T): T
}

const same: generic = (arg) => {
    return arg
}

same(1)
same([true])
same(["a", "b"])