class Character {
    constructor(id, name, attack, hp, ) {
        this.id = id;
        this.name = name;
        this.attack = attack;
        this.hp = hp;
        console.log(id, name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}

class mainCharacter extends Character {
    constructor(id, name, attack, hp, stresshp,){
        super(id, name, attack, hp);
        this.stresshp = stresshp;
    }
}

const Joeyy = new Person(1, 'Joeyy', 8, 20,);
const Darla = new Person(2, 'Darla', 8, 20,);