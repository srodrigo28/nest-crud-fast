import { CreateProdutoDto } from "./CreateProdutoDto";

export interface UpdateProdutoDto extends Partial<CreateProdutoDto>{
    id: number;
}