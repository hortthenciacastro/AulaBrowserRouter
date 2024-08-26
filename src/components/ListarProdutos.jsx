import { useState } from "react"

export default function ListaProdutos({listaProdutos}){
    return(
        <div className="container">
            {listaProdutos.map((produto)=>
            <div key={produto.id} class="card">
                <p> {produto.item}</p>
                <img src={produto.imagem}></img>
                <h3>{produto.preco}</h3>
                <p>{produto.descricao}</p>
                <p>{produto.tamanho}</p>
            </div>    
                )}
        </div>
    );
}