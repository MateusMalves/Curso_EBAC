class Animal {
    constructor(nome, idade) {
        if (new.target === Animal) {
            throw new Error("Não é possível instanciar classe abstrata diretamente");
        }
        if (!nome || typeof nome !== "string") {
            throw new Error("O nome deve ser uma string válida");
        }
        if (!Number.isInteger(idade) || idade < 0) {
            throw new Error("A idade deve ser um número inteiro não negativo");
        }
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("Método abstrato deve ser implementado");
    }

    informacoes() {
        return `${this.nome}, ${this.idade} anos`;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        if (!raca || typeof raca !== "string") {
            throw new Error("A raça deve ser uma string válida");
        }
        this.raca = raca;
    }

    emitirSom() {
        return "Au Au!";
    }

    informacoes() {
        return `${super.informacoes()}, Raça: ${this.raca}`;
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        if (!cor || typeof cor !== "string") {
            throw new Error("A cor deve ser uma string válida");
        }
        this.cor = cor;
    }

    emitirSom() {
        return "Miau!";
    }

    informacoes() {
        return `${super.informacoes()}, Cor: ${this.cor}`;
    }
}

// Testando com polimorfismo
const animais = [
    new Cachorro("Rex", 3, "Labrador"),
    new Gato("Mimi", 2, "Branco"),
    new Cachorro("Thor", 5, "Pitbull"),
    new Gato("Luna", 1, "Preto")
];

// Exibindo os animais no HTML
const container = document.getElementById("animais-container");

animais.forEach(animal => {
    const animalDiv = document.createElement("div");
    animalDiv.innerHTML = `
        <p><strong>Informações:</strong> ${animal.informacoes()}</p>
        <p><strong>Som:</strong> ${animal.emitirSom()}</p>
        <hr>
    `;
    container.appendChild(animalDiv);
});