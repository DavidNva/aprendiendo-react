import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    //console.log('render width name: ', name)
    const [isFollowing, setIsFollowing] = useState(false);
    console.log("[App] render with isFollowing: ", isFollowing)
    
    return (
        <section className='App'>
            <TwitterFollowCard userName="DavidNvaG" initialIsFollowing= {isFollowing}>
               David Nava Garcia
            </TwitterFollowCard>
            {/* <TwitterFollowCard userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard> */}
            <button onClick={()=> setIsFollowing(!isFollowing)}>Cambiar estado de App</button>
            {/*Aunque estemos cambiando, y por consola parezca que si cambie de true a false y por lo tanto deberia hacer el cambio de siguiendo y no siguiendo, esto no aplica asi en react. Ese parametro solo inicializa el estado pero nada mas, por eso mejro ponerle initial y entenderlo que solo inicializa, no poedmos ir hacia abajo con esos cambios, no se si me explico   */}
        </section> 
    )
}


//notas
  //const [name, setName] = useState('DavidNvaG')//Se ejecuta cada vez que cambia el estado, es decir, si se vuelve a renderizar(incluso cuando el cambio solo ocurre al primero. Pero ojo, renderiza, pero en el DOM si hubo cambios no le hace nada. Digamos react si tiene que renderizar (ver si hubo cambios) pero si solo detecto cambiso en uno eso si lo refleja en el DOM, para los demas, aunque lo renderizo, pero si no hubo cambios, no hay porque actualizar el DOM o reflejar algun cambio en este)
    //Esto es por ejemplo, con el padre que tiene un cambio, los hijos deben renderizarse 

     
            // <button onClick={() => setName('elonmusk')}>
            //     Cambiar nombre 
            // </button>
            // {/* <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran"></TwitterFollowCard> */}