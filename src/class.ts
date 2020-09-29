abstract class Animal {  //抽象类
    eat() { //方法
        console.log('eat')
    }
    abstract sleep(): void
}
// let animal = new Animal() // 实例化 报错

class Dog extends Animal {
    constructor(name: string) {
        super()
        this.name = name //初始化
        this.pri()
    }
    public name: string = 'dog'
    run() {}
    private pri() {} //私有成员
    protected pro() {} //受保护成员
    readonly legs: number = 4 //只读
    static food: string = 'bones'  //静态成员 只能通过类名调用console.log(Dog.food)
    sleep() {
        console.log('Dog sleep')
    }
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food)
dog.eat()

//extends 继承关键字 super 代表父类的实例 this 在super调用之后调用
class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        // this.pri()
        this.pro()
    }
    // color: string
}
console.log(Husky.food) //继承类food


// 多态
class Cat extends Animal {
    sleep() { //抽象方法
        console.log('Cat sleep')
    }
}
let cat = new Cat()//实例

// 定义数组
let animals: Animal[] = [dog, cat]
animals.forEach(i => {
    i.sleep()
})

class Workflow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
new Workflow().step1().step2()//链式调用

class MyFlow extends Workflow {
    next() {
        return this
    }
}
new MyFlow().next().step1().next().step2()