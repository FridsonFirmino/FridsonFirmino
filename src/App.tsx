import './style/app.css'
import logoImage from './assets/logo-nlw-esports.png'
import game1 from './assets/games/game-1.png'
import game2 from './assets/games/game-2.png'
import game3 from './assets/games/game-3.png'
import game4 from './assets/games/game-4.png'
import game5 from './assets/games/game-5.png'
import game6 from './assets/games/game-6.png'

export default function App() {
  return (
    <div className='logo'>
      <img src={logoImage}/>

      <h1>Seu <span id='duo'>duo</span> está aqui.</h1>
    
      <div className='grid'>
        <a href=''>
          <img src={game1}/>
          <div className='discricao'>
            <strong>League of Legends</strong>
            <span id='anuncio'>4 anúncios</span>
          </div>
        </a>

        <a href=''>
          <img src={game2}/>
          <div className='discricao'>
            <strong>Dota 2</strong>
            <span id='anuncio'>4 anúncios</span>
          </div>
        </a>

        <a href=''>
          <img src={game3}/>
          <div className='discricao'>
            <strong>Counter Strike</strong>
            <span id='anuncio'>4 anúncios</span>
          </div>
        </a>

        <a href=''>
          <img src={game4}/>
          <div className='discricao'>
            <strong>Apex Legends</strong>
            <span id='anuncio'>4 anúncios</span>
          </div>
        </a>

        <a href=''>
          <img src={game5}/>
          <div className='discricao'>
            <strong>Fortnite</strong>
            <span id='anuncio'>4 anúncios</span>
          </div>
        </a>

        <a href=''>
          <img src={game6}/>
          <div className='discricao'>
            <strong>Warcraft</strong>
            <span id='anuncio'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='publicar'>
        <div>
          <strong id='encontreDuo'>Não encontrou seu duo?</strong>
          <span> Publique um anúncio para encontrar novos players! </span>
        </div>

        <button>
          Publicar Anúncio
        </button>
      </div>
    
    </div>
    
    
  )
}
