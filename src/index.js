class Foo {
    name;

    constructor(name) {
        this.name = name;
    }
}

const main = async () => {
    const bar = new Foo('bar');

    console.log(bar);
}

main();