// Objeto -> chave: valor
const cliente = {
    nome: "Fernando",
    idade: 48,
    cpf: "12345678922",
    email: "fernando@email.com",
    fones: ["44999887766", "44977552233"],
    telefones: {
        residencial: "4430305656",
        comercial: "44988774455",
        contato: "44955663322"
    }
}

// imprimir os telefones do objeto cliente
console.log(cliente.fones)
cliente.fones.forEach(fone => console.log(fone))

console.log(cliente)
