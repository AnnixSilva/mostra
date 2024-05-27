import React from "react";
import "../CSS/Loja.css"
import { ReactComponent as Banner } from '../assets/banner_loja.svg';
import { ReactComponent as Baner } from '../assets/banner2.svg';
import { ReactComponent as Baner3 } from '../assets/banner3.svg';
import { ReactComponent as Baner4 } from '../assets/ecologo.svg';
import { ReactComponent as Baner5 } from '../assets/banner5.svg';
import { ReactComponent as Pro1 } from '../assets/produto1.svg';
import { ReactComponent as Pro2 } from '../assets/produto2.svg';
import { ReactComponent as Pro3 } from '../assets/produto3.svg';
import { ReactComponent as Pro4 } from '../assets/produto4.svg';

function Loja (){
    return(
        <body>
        <h1 className="Nome">Loja Eco</h1>
        <hr className="linhaLoja"></hr>
        <Banner className='banner' />
        <Baner className='baner' />
        <Baner3 className='baner3' />
        <div className="ajeitar">
            <hr className="fundoPrec"></hr>
            <hr className="fundoPrec2"></hr>
            <hr className="fundoPrec3"></hr>
            <hr className="fundoPrec4"></hr>
        </div>
        <ul className="preco">
        <p className="money">R&#36;</p> <p className="quinze">15,99</p>
        <p className="money2">R&#36;</p> <p className="doze">12,50</p>
        <p className="money3">R&#36;</p> <p className="vinte">28,30</p>
        <p className="money4">R&#36;</p> <p className="cinco">5,89</p>

            <div className="texto">
            <div class="quadrado">
                <p><h4>Talheres de madeira</h4></p>
            </div>
            <div className="quadrado2">
                <p><h4>Copo ecológico com tampa</h4></p>
            </div>
            <div className="quadrado3">
                <p><h4>Kit ecológico de madeira</h4></p>
            </div>
            <div className="quadrado4">
                <p><h4>Canudo de papel</h4></p>
            </div>
        </div>    
        </ul>

        <Baner5 className="Fundo2"/>
        <ul className="images">
            <Pro1 className="ajeitar-2"/>
            <Pro2 className="ajeitar-2"/>
            <Pro3 className="ajeitar-2"/>
            <Pro4 className="ajeitar-2"/>
        </ul>
        <div className="ajeitar">
            <hr className="fundoPrec5"></hr>
            <hr className="fundoPrec6"></hr>
            <hr className="fundoPrec7"></hr>
            <hr className="fundoPrec8"></hr>
        </div>
        

        <div className="texto">
            <div class="quadrado5">
                <p><h4>Bucha Vegetal</h4></p>
            </div>
            <div className="quadrado6">
                <p><h4>Vasa de Planta Eco</h4></p>
            </div>
            <div className="quadrado7">
                <p><h4>Canudo de Plástico Biodegrádavel</h4></p>
            </div>
            <div className="quadrado8">
                <p><h4>Sabão Natural</h4></p>
            </div>
        </div>

        <ul className="preco">
            <p className="money5">R&#36;</p> <p className="cinco2">5,20</p>
            <p className="money6">R&#36;</p> <p className="cinco3">5,00</p>
            <p className="money7">R&#36;</p> <p className="dez">10,00</p>
            <p className="money8">R&#36;</p> <p className="sete">7,00</p>
        </ul>
            <Baner4/>
        </body>
    )
}

export default Loja;