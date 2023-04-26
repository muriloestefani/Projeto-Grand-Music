import React from "react";
import Logo from '../LOGO/LOGO'

import Foto1 from '../../../../imagens/time/filipi.png'
import Foto2 from '../../../../imagens/time/murilo.png'
import Foto3 from '../../../../imagens/time/fernando.png'
import Foto4 from '../../../../imagens/time/Giovana.png'



import'./estilo.css'

function Sobre(){
    return(

        <>
        <header className='App-header'>
            <Logo />
        </header>
        
        <div className='team'>
                <h1>Nossa<span>Equipe</span></h1>

                <div className='team_box'>
                    <div className='profile'>
                        <img 
                            src={Foto1}
                        ></img>

                            <div className='info'>
                                <h2 className='name'>Filipi</h2>
                                <p className='bio'>Fez tudo</p>

                                <div className='team_icon'>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>

                            </div>

                        </div>


                    <div className='profile'>
                        <img src={Foto2}></img>

                            <div className='info'>
                                <h2 className='name'>Murilo</h2>
                                <p className='bio'> .</p>

                                <div className='team_icon'>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>

                            </div>

                        </div>



                    <div className='profile'>
                        <img src={Foto3}></img>

                            <div class="info">
                                <h2 class="name">Fernando</h2>
                                <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                <div class="team_icon">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>

                            </div>

                    </div>



                    <div className='profile'>
                        <img src={Foto4}></img>

                            <div className='info'>
                                <h2 className='name'>Giovana</h2>
                                <p className='bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                <div className='team_icon'>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>

                            </div>

                        </div>


                </div>


            </div>
            </>




        

    )
}
export default Sobre;