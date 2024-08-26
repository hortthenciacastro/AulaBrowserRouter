import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';

export default function Produtos () {
    const [listaProdutos, setListaProdutos] = useState([
        {

            id: 1,

            item: "TOP EMARÊ",

            imagem: "https://fiozato.com/cdn/shop/files/TopEmareFiozato01_1500x.png?v=1720812494",

            preco: "259,99",

            descricao: "TOP EMARÊ, FIOZATO, OFF WHITE",

            tamanho: "G"

        },
        {

            id: 2,

            item: "TOP MOLDABLE",

            imagem: "https://fiozato.com/cdn/shop/files/TopMoldableFiozato02_1500x.png?v=1715352566",

            preco: "227,00",

            descricao: "TOP MOLDABLE, FIOZATO, PRETO",

            tamanho: "G"

        },
        {

            id: 3,

            item: "TOP TOAST",

            imagem: "https://fiozato.com/cdn/shop/files/TopToastFiozato02_1500x.png?v=1723860589",

            preco: "269,00",

            descricao: "TOP TOAST, FIOZATO, BRONZE",

            tamanho: "M"

        },
        {

            id: 4,

            item: "TOP NIMI",

            imagem: "https://fiozato.com/cdn/shop/files/TopNimiFiozato03_1500x.png?v=1723851476",

            preco: "229,99",

            descricao: "TOP NIMI, FIOZATO, AZUL",

            tamanho: "GG"

        },
        {

            id: 5,

            item: "TOP FRINGE",

            imagem: "https://fiozato.com/cdn/shop/files/TopFringeFiozato01_1500x.png?v=1722990545",

            preco: "229,99",

            descricao: "TOP FRINGE, FIOZATO, PRETO",

            tamanho: "PP"

        },
        {

            id: 6,

            item: "VESTIDO MADAM",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoMadamFiozato01_1500x.png?v=1705354942",

            preco: "349,00",

            descricao: "VESTIDO MADAM, FIOZATO, ROSA",

            tamanho: "G"

        },
        {

            id: 7,

            item: "VESTIDO JANE",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoJaneFiozato01_1500x.png?v=1697589146",

            preco: "199,99",

            descricao: "VESTIDO JANE, FIOZATO, ROSA",

            tamanho: "GG"

        },
        {

            id: 8,

            item: "VESTIDO STAY",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoStayFiozato01_1500x.png?v=1696791838",

            preco: "209,99",

            descricao: "VESTIDO STAY, FIOZATO, PRETO",

            tamanho: "G"

        },
        {

            id: 9,

            item: "VESTIDO ESPANHA VERANO",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoEspanhaVeranoFiozato01_1500x.png?v=1696524736",

            preco: "387,99",

            descricao: "VESTIDO ESPANHA VERANO, FIOZATO",

            tamanho: "GG"

        },
        {

            id: 10,

            item: "VESTIDO GLAMOROUS",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoGlamorousFiozato01_1500x.png?v=1715122815",

            preco: "259,99",

            descricao: "VESTIDO GLAMOROUS, FIOZATO, PRETO",

            tamanho: "M"

        },
        {

            id: 11,

            item: "SHORT SAIA ENVELOPE",

            imagem: "https://fiozato.com/cdn/shop/files/ShortSaiaEnvelopeFiozato01_1500x.png?v=1695937156",

            preco: "189,99",

            descricao: "SHORT SAIA ENVELOPE, FIOZATO, LILÁS",

            tamanho: "GG"

        },
        {

            id: 12,

            item: "SAIA MASAI",

            imagem: "https://fiozato.com/cdn/shop/files/SaiaMasaiFiozato01_1500x.png?v=1698289417",

            preco: "177,00",

            descricao: "SAIA MASAI, FIOZATO",

            tamanho: "PP"

        },
        {

            id: 13,

            item: "SAIA SPOTTED",

            imagem: "https://fiozato.com/cdn/shop/files/SaiaSpottedFiozato01_1500x.png?v=1694816427",

            preco: "199,99",

            descricao: "SAIA SPOTTED, FIOZATO, PRETO",

            tamanho: "GG"

        },
        {

            id: 14,

            item: "SAIA MERMAID",

            imagem: "https://fiozato.com/cdn/shop/files/SaiaMermaidFiozato01_1500x.png?v=1693847938",

            preco: "199,99",

            descricao: "SAIA MERMAID, FIOZATO, PRETO",

            tamanho: "G"

        },
        {

            id: 15,

            item: "SAIA SNOW",

            imagem: "https://fiozato.com/cdn/shop/files/SaiaSnowFiozato01_1500x.png?v=1717441034",

            preco: "259,99",

            descricao: "SAIA SNOW, FIOZATO, BRANCO",

            tamanho: "M"

        },
        {

            id: 16,

            item: "CONJUNTO GRÉCIA",

            imagem: "https://fiozato.com/cdn/shop/files/ConjuntoGreciaFiozato01_1500x.png?v=1701148836",

            preco: "349,99",

            descricao: "CONJUNTO GRÉCIA, FIOZATO, AZUL",

            tamanho: "G"

        },
        {

            id: 17,

            item: "CONJUNTO JEANS",

            imagem: "https://fiozato.com/cdn/shop/files/ConjuntoJeansFiozato01_1500x.png?v=1710358671",

            preco: "489,00",

            descricao: "CONJUNTO JEANS, FIOZATO",

            tamanho: "P"

        },
        {

            id: 18,

            item: "CONJUNTO ESPANHA",

            imagem: "https://fiozato.com/cdn/shop/files/ConjuntoEspanhaFiozato01_1500x.png?v=1710219458",

            preco: "389,99",

            descricao: "CONJUNTO ESPANHA, FIOZATO",

            tamanho: "G"

        },
        {

            id: 19,

            item: "CONJUNTO BAMBU",

            imagem: "https://fiozato.com/cdn/shop/files/ConjuntoBambuFiozato01_1500x.png?v=1710198031",

            preco: "329,99",

            descricao: "CONJUNTO BAMBU, FIOZATO",

            tamanho: "GG"

        },
        {

            id: 20,

            item: "CONJUNTO TROPICAL",

            imagem: "https://fiozato.com/cdn/shop/files/ConjuntoTropicalFiozato01_1500x.png?v=1698863497",

            preco: "299,99",

            descricao: "CONJUNTO TROPICAL, FIOZATO",

            tamanho: "PP"

        }
    ])

    return (
        <div>
            <Header />
            <ListarProdutos listaProdutos={listaProdutos} />
            <Footer />
        </div>
    );
}