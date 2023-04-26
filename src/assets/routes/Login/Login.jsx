import React from "react";
import Logo from '../LOGO/LOGO'
import'./estilo.css'





function Login(){
    return(

        <>
        <header className='App-header'>
            <Logo />
        </header>
        <div class="container">
        <h2>Login</h2>
            <form>
                <div class="input">
                    <input></input>
                    <label for="nome">usuario</label>
                </div> 

                <div class="input">
                    <input type="password" id="senha" placeholder=" Digite sua senha "></input>
                    <label for="senha">Senha</label>
                </div>

                <div class="center">
                    <button>Entrar</button>

                </div>
            </form>
   
    
        <div class="links">
            <a href=""><p>Esqueceu a senha?</p></a>
            <a href=""><p>Ainda nao sou cadastrado</p></a>
        </div>
    </div>


            </>

    )
}

    export default Login