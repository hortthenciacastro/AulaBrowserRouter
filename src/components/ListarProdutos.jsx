import "../globals.css";

export default function ListarProdutos({lista}){
    return(
        <div>
              {
            lista.map((produto)=>
            <div key={produto.id}>
            <h2>{produto.item}</h2>
            <img src={produto.imagem}/>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <p>{produto.tamanho}</p>
            </div>
            )
        }
        </div>
    )
}