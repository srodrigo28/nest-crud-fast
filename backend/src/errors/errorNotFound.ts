export class errorNotFound extends Error {
    constructor(entity: string, key: string, attribute: string | number){
        super(`O(A) ${entity} com o ${key}: ${attribute} não encontrado`)
    }
}