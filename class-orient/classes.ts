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
