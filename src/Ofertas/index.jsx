import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';

export default function Ofertas() {
    const [listaOfertas, setListaOfertas] = useState([
        {
            id: 1,

            item: "TOP AURORA",

            imagem: "https://fiozato.com/cdn/shop/files/TopAuroraFiozato01_1500x.png?v=1722381880",

            preco: "149,99",

            descricao: "TOP AURORA, FIOZATO, ROSA",

            tamanho: "G"  
        },
        {
            id: 2,

            item: "CALÇA VICTORIOUS",

            imagem: "https://fiozato.com/cdn/shop/files/CalcaVictoriousFiozato01_1500x.png?v=1710183955",

            preco: "199,99",

            descricao: "CALÇA VICTORIOUS, FIOZATO, PRETO",

            tamanho: "GG"  
        },
        {
            id: 3,

            item: "TOP STRING",

            imagem: "https://fiozato.com/cdn/shop/files/CorsetStringFiozato01_1500x.png?v=1716230123",

            preco: "149,99",

            descricao: "TOP STRING, FIOZATO, BRANCO",

            tamanho: "PP"  
        },
        {
            id: 4,

            item: "SHORTS BALONE",

            imagem: "https://fiozato.com/cdn/shop/files/ShortBaloneFiozato01_1500x.png?v=1717822355",

            preco: "129,99",

            descricao: "SHORTS BALONE, FIOZATO, BRANCO",

            tamanho: "GG"  
        },
        {
            id: 5,

            item: "TOP LIPSTICK",

            imagem: "https://fiozato.com/cdn/shop/files/TopLipstickFiozato01_1500x.png?v=1715607965",

            preco: "159,99",

            descricao: "TOP LIPSTICK. FIOZATO, VERMELHO",

            tamanho: "M"  
        },
        {
            id: 6,

            item: "TOP WARM",

            imagem: "https://fiozato.com/cdn/shop/files/TopWarmFiozato01_1500x.png?v=1715611079",

            preco: "139,99",

            descricao: "TOP WARM, FIOZATO, VERMELHO",

            tamanho: "PP"  
        },
        {
            id: 7,

            item: "TOP PIERCING",

            imagem: "https://fiozato.com/cdn/shop/files/TopPiercingFiozato01_1500x.png?v=1715790869",

            preco: "169,90",

            descricao: "TOP PIERCING, FIOZATO, OFF WHITE",

            tamanho: "M"  
        },
        {
            id: 8,

            item: "VESTIDO GALLANT",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoGallantFiozato01_1500x.png?v=1724006126",

            preco: "499,90",

            descricao: "VESTIDO GALLANT, FIOZATO, PRETO",

            tamanho: "G"  
        },
        {
            id: 9,

            item: "TOP HARROW",

            imagem: "https://fiozato.com/cdn/shop/files/TopHarrowFiozato03_1500x.png?v=1720121538",

            preco: "129,90",

            descricao: "TOP HARROW, FIOZATO, ROSA",

            tamanho: "M"  
        },
        {
            id: 10,

            item: "SHORT SAIA SAFRA",

            imagem: "https://fiozato.com/cdn/shop/files/ShortSaiaSafraFiozato01_1500x.png?v=1722828114",

            preco: "119,90",

            descricao: "SHORT SAIA SAFRA, FIOZATO, BEGE",

            tamanho: "PP"  
        },
        {
            id: 11,

            item: "BODY GLOSS",

            imagem: "https://fiozato.com/cdn/shop/files/BodyGlossFiozato01_1500x.png?v=1715404970",

            preco: "",

            descricao: "BODY GLOSS, FIOZATO, PRETO",

            tamanho: "G"  
        },
        {
            id: 12,

            item: "BODY LACE",

            imagem: "https://fiozato.com/cdn/shop/files/BodyLaceFiozato01_1500x.png?v=1717911388",

            preco: "139,90",

            descricao: "BODY LACE, FIOZATO, PRETO",

            tamanho: "GG"  
        },
        {
            id: 13,

            item: "CASACO STRAW",

            imagem: "https://fiozato.com/cdn/shop/files/CasacoStrawFiozato02_1500x.png?v=1718425165",

            preco: "459,69",

            descricao: "CASACO STRAW, FIOZATO, PRETO",

            tamanho: "GG"  
        },
        {
            id: 14,

            item: "VESTIDO ÁGUA DE COCO",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoMintFiozato01_1500x.png?v=1705187073",

            preco: "259,99",

            descricao: "VESTIDO ÁGUA DE COCO, FIOZATO",

            tamanho: "P"  
        },
        {
            id: 15,

            item: "VESTIDO LIMONCELLO",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoLimoncelloFiozato01_1500x.png?v=1723003597",

            preco: "239,99",

            descricao: "VESTIDO LIMONCELLO, FIOZATO",

            tamanho: "P"  
        }
    ])
    return (
        <div>
            <Header />
            <ListarProdutos listaProdutos={listaOfertas} />
            <Footer />
        </div>
    );
}