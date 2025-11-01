import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const [name, setName] = useState('DavidNvaG')//Se ejecuta cada vez que cambia el estado, es decir, si se vuelve a renderizar(incluso cuando el cambio solo ocurre al primero. Pero ojo, renderiza, pero en el DOM si hubo cambios no le hace nada. Digamos react si tiene que renderizar (ver si hubo cambios) pero si solo detecto cambiso en uno eso si lo refleja en el DOM, para los demas, aunque lo renderizo, pero si no hubo cambios, no hay porque actualizar el DOM o reflejar algun cambio en este)
    //Esto es por ejemplo, con el padre que tiene un cambio, los hijos deben renderizarse 

    console.log('render width name: ', name)

    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>
               David Nava Garcia
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>
            
            <button onClick={() => setName('elonmusk')}>
                Cambiar nombre 
            </button>
            {/* <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran"></TwitterFollowCard> */}
        </section> 
    )
}