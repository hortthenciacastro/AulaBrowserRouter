import { useState } from "react";

export default function HOME() {
    const [produtosHome, setProdutosHomes] = useState([
        {

            id: 1,

            item: "TOP LADY",

            imagem: "https://fiozato.com/cdn/shop/files/TopLadyFiozato01.png?v=1702961404",

            preco: "189,99",

            descricao: "TOP LADY, FIOZATO, ROSA",

            tamanho: "M"

        },
        {

            id: 2,

            item: "TOP RIVER",

            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdh1Cp2d6uxY2u_jTQvTYkakvJ0FpxCsZ7w&s",

            preco: "209,99",

            descricao: "TOP RIVER, FIOZATO, VERDE",

            tamanho: "PP"

        },
        {

            id: 3,

            item: "TOP PARTY",

            imagem: "https://fiozato.com/cdn/shop/files/TopPartyFiozato01.png?v=1702953275",

            preco: "189,99",

            descricao: "TOP PARTY, FIOZATO, PRETO",

            tamanho: "GG"

        },
        {

            id: 4,

            item: "SAIA CANDY",

            imagem: "https://fiozato.com/cdn/shop/files/SaiaCandyFiozato01_1500x.png?v=1696449936",

            preco: "179,99",

            descricao: "SAIA CANDY, FIOZATO, ROSA",

            tamanho: "M"

        },
        {

            id: 5,

            item: "SAIA STELAR",

            imagem: "https://fiozato.com/cdn/shop/files/SaiaStelarFiozato01_1500x.png?v=1693442123",

            preco: "189,99",

            descricao: "SAIA STELAR, FIOZATO, PRETO",

            tamanho: "G"

        },
        {

            id: 6,

            item: "SAIA POLLY",

            imagem: "https://fiozato.com/cdn/shop/files/SaiaPollyFiozato01_1500x.png?v=1702789202",

            preco: "189,99",

            descricao: "SAIA POLLY, FIOZATO, JEANS ",

            tamanho: "GG"

        },
        {

            id: 7,

            item: "VESTIDO PEROLA",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoPerolaFiozato01_1500x.png?v=1700717521",

            preco: "289,99",

            descricao: "VESTIDO PEROLA, FIOZATO, PRETO",

            tamanho: "GG"

        },
        {

            id: 8,

            item: "VESTIDO FRANCES",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoFrancesFiozato01_1500x.png?v=1700753014",

            preco: "199,99",

            descricao: "VESTIDO FRANCES, FIOZATO, VERDE",

            tamanho: "M"

        },
        {

            id: 9,

            item: "VESTIDO LONELY",

            imagem: "https://fiozato.com/cdn/shop/files/VestidoLonelyFiozato01_1500x.png?v=1697669749",

            preco: "269,99",

            descricao: "VESTIDO LONELY, FIOZATO, PRETO",

            tamanho: "P"
        }
    ])};

return(
    <>
    <header>
        <p></p>
        <carousel
            infiniteloop usekeyboardArrows autoPlay
            showArrows={true}
            showArrows={true}
            showArrows={true}
            >
                <div>
                    <img src=""/>
                </div>
                <div>
                    <img src=""/>
                </div>
                <div>
                    <img src=""/>
                </div>
            </carousel>
            </header>
            </>
)
