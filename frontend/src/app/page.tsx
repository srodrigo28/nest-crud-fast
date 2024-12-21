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
      <div>
        <h2 className="text-3xl mb-5 lg:mt-5">Cadastrar Produto</h2>
        <div className="flex flex-col lg:flex-row gap-3 justify-center ">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input 
            id="nome"
            type="text" value={produto.nome ?? ''} 
            onChange={ e => setProduto({ ...produto, nome: e.target.value })}
            className="bg-zinc-700 p-2 lg:w-64 rounded-md border-none outline-none"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="descricao">Descrição</label>
          <input 
            id="descricao"
            type="text" value={produto.descricao ?? ''} 
            onChange={ e => setProduto({ ...produto, descricao: e.target.value })}
            className="bg-zinc-700 p-2 lg:w-96 rounded-md border-none outline-none"
          />
        </div>
        
        <div className="flex gap-2 items-center justify-center">
          <div className="flex flex-col">
            <label htmlFor="preco">Preço</label>
              <input 
                id="preco"
                type="number" value={produto.preco ?? ''} 
                onChange={ e => setProduto({ ...produto, preco: Number(e.target.value) })}
                className="bg-zinc-700 p-2 rounded-md border-none outline-none"
              />
          </div>
          { produto.id ? (
            <button onClick={alterarProduto} className="self-end p-2 py-2 px-4 bg-yellow-600 rounded-md text-white">Alterar</button>
          ): 
            <button onClick={criarProduto} className="self-end p-2 py-2 px-4 bg-blue-600 rounded-md text-white">Salvar</button>
          }
        </div>
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
      <div className="flex w-[360px] md:w-[580px] lg:w-[980px] gap-2 flex-col">
        { produtos.map( (item: any) => (
          <div key={item.id} className="flex gap-2 bg-zinc-800 p-2 rounded-md items-center justify-between">
              <div className="flex-1 flex justify-between px-5">
                <p>{item.nome}</p>
                <p className="hidden md:block">{item.descricao}</p>
                <p>{item.preco}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => excluirProduto(item.id)} className="p-2 px-3 rounded-md bg-red-500">Excluir</button>
                <button onClick={() => obterProdutoPorId(item.id)} className="p-2 px-3 rounded-md bg-yellow-500">Alterar</button>
              </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 mt-5 items-center h-screen bg-zinc-900 text-white p-5">
        {renderizarFormProduto()}
        {renderizarProdutos()}
      </div>
  );
}
