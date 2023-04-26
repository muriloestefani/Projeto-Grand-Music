import'./estilo.css'
import MENU from'../../../../imagens/fundo.png'
function Men(){
    return(

        <main>
        <section className='home'>
            <div className='home-text'>
        
                <h1 className='text-h1'>Grand Music</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod error veniam in voluptatem magni quisquam</p>
                <a href="#" className='home-btn'>Compre Agora</a>
            </div>
            <div className='home-img'>
                <img src={MENU}></img>
            </div>
        </section>
    </main>

    )
}
export default Men