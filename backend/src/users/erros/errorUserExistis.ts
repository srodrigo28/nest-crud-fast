export class errorUserExistis extends Error{
    constructor(nome: string){
        super(`Pessoa com nome ${nome} já existe!`)
    }
}