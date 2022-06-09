'use strict';
class Player {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
}

const dulee = new Player("lee","du","dulee")
console.log(dulee.nickName);

console.log("dictionary example");

type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const kimchi = new Word("kimchi", "korean food")

const dict = new Dict()
dict.add(kimchi)
dict.def("korean food")

interface User {
    name: string;
}

interface Tester extends User {
    phone: number;
}

const tester: Tester = {
 'name': "aaa0",
 'phone': 123   
}