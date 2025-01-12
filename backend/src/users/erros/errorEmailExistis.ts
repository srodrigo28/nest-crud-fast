export class errorEmailExistis extends Error{
    constructor(email: string){
        super(`Ess já foi ${email} já registrado!`)
    }
}