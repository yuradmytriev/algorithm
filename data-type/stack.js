const Stack = () => {
 let list = [];
 
 const push = value => { 
 	list.push(value) 
 };
 const pop = () => list.pop();

 return Object.freeze({
   push,
   pop,
 });
}

let stack = Stack();
stack.push(1);
stack.push(2);

console.log(stack.pop())

/*
  Объект stack содержит открытые методы push() и pop(). Внутреннее состояние изменяется только с помощью этим методов.

  stack.list; //undefined
  Я не могу напрямую изменить внутреннее состояние:

  stack.list = 0;//Cannot add property list, object is not extensible
*/

// class way

class Stack {
  constructor(){
    this.list = [];
  }
  
  push(value) { this.list.push(value); }
  pop() { return this.list.pop(); }
 }