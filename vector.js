class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(vector) {
        this.x += vector.x
        this.y += vector.y
        return this
    }

    minus(vector) {
        this.x -= vector.x
        this.y -= vector.y
        return this
    }

    get length() {
        let x = this.x
        let y = this.y
        let distance = Math.floor(Math.sqrt(x*x + y*y))
        return distance
    }
}

console.log(new Vec(1, 2))
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
