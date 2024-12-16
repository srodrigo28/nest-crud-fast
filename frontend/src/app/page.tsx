'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [produto, setProduto] = useState<any>([])
  const [produtos, setProdutos] = useState<any>([])
  const url = "http://localhost:3001/produto"
  
  useEffect( () => {
    obeterProdutos()
  }, [])

  async function obeterProdutos(){
    const resp = await fetch(url)
    const produtos = await resp.json()
    setProdutos(produtos)
    // console.log(produtos)
  }

  function renderizarFormProduto(){
    return(
      <div className="flex gap-5 items-end justify-center ">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input 
            id="nome"
            type="text" value={produto.nome ?? ''} 
            onChange={ e => setProduto({ ...produto, nome: e.target.value })}
            className="bg-zinc-700 p-2 rounded-md border-none outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="descricao">Descrição</label>
          <input 
            id="descricao"
            type="text" value={produto.descricao ?? ''} 
            onChange={ e => setProduto({ ...produto, descricao: e.target.value })}
            className="bg-zinc-700 p-2 rounded-md border-none outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="preco">Preço</label>
          <input 
            id="preco"
            type="number" value={produto.preco ?? ''} 
            onChange={ e => setProduto({ ...produto, preco: Number(e.target.value) })}
            className="bg-zinc-700 p-2 rounded-md border-none outline-none"
          />
        </div>
        <div>
          { produto.id ? (
            <button onClick={alterarProduto} className="p-2 py-2 px-4 bg-yellow-600 rounded-md text-white">Alterar</button>
          ): 
            <button onClick={criarProduto} className="p-2 py-2 px-4 bg-blue-600 rounded-md text-white">Salvar</button>
          }
        </div>
      </div>
    )
  }

  async function excluirProduto(id: number){
    await fetch(url+'/'+id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    })
    await obeterProdutos()
  }

  async function obterProdutoPorId(id: number){
    const resp = await fetch(url+'/'+id)
    const produto = await resp.json()
    setProduto(produto)
      
  }

  async function alterarProduto(){
    await fetch(url+'/'+produto.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produto),
    })
    setProduto({})
    await obeterProdutos()
  }

  async function criarProduto(){
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto),
    })
    setProduto({})
    await obeterProdutos()
  }

  function renderizarProdutos(){
    return(
      <div className="flex w-full gap-2 flex-col px-64">
        { produtos.map( (item: any) => (
          <div key={item.id} className="flex gap-2 bg-zinc-800 p-2 rounded-md items-center justify-between">
              <div className="flex-1 flex justify-between px-5">
                <p>{item.nome}</p>
                <p>{item.preco}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => excluirProduto(item.id)} className="p-2 px-5 bg-red-500">Excluir</button>
                <button onClick={() => obterProdutoPorId(item.id)} className="p-2 px-5 bg-yellow-500">Alterar</button>
              </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="h-screen bg-zinc-900 flex gap-10 justify-center flex-col items-center text-white p-5">
        {renderizarFormProduto()}
        {renderizarProdutos()}
      </div>
  );
}
