export class errorProdutoExits extends Error{
    constructor(nome: string){
        super(`Produto já registrado com o nome: ${nome}`)
    }
}