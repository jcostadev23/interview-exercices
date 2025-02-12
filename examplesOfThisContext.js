//"use strict";
const person = {
  name: "Jose",
  lastName: "Costa",
  firstName: function () {
    return this.name;
  },
};

const personFirstName = person.firstName();

function mostrarThis() {
  console.log("this", this);
}

const obj = {
  tip: "Hello",
  executar: mostrarThis,
};

// mostrarThis();
obj.executar();

function Animal(name) {
  this.name = `I am ${name}`;

  return this.name;
}

function barck() {
  return "wof wof wof";
}

const dog = new Animal("Dog");
dog.barck = barck();
const cat = new Animal("Cat");

const contador = {
  value: 0,
  increment: function (...args) {
    setTimeout(() => {
      this.value++;
      console.log("contador", this.value);
      console.log("contador1", ...args);
    }, 1000);
  },
};

contador.increment();
const increment = contador.increment;
increment.call(contador);
increment.apply(contador, ["Teste dos args", "Apply"]);
increment.call(contador);
