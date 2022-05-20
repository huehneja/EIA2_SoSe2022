class student {
    semester: number;
    age: number;
    curriculum: string;
    consume(_ware: string): void {
        this.curriculum = _ware;
    }
}
let joscha: student = new student();
joscha.consume("alkohol");
console.log(joscha.toString);