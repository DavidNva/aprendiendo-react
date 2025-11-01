import { useState } from "react"
export function TwitterFollowCard({children,userName = 'unknown', isFollowing}){
    const state = useState(false)//Tenemos que decirle cual es el valor por defecto de ese estado
    //Este state devuelve un array, un array de dos posiciones 
    const isFollowing = state[0]//La primera posicion es el valor del estado: 
    const setIsFollowing = state[1]//La segunda posicion, lo que tenemso es una funcion que nos va a permitir actualizar el estado para la nueva versión 
    
    //Si queremos evitarnos escribir 3 lineas por cada useState que tengamos, en js tenemso desestructuracion, donde podemos  en una sola linea decirle, 
    const [isFollowing, setIsFollowing1] = useState(false)//Tenemos que decirle cual es el valor por defecto de ese estado y es lo mismo que las 3 lineas de codigo anteriores 
     
(false)
    const text = isFollowing? 'Suguiendo' : 'Seguir'
    const buttonClassName = isFollowing
                            ? 'tw-followCard-button is-following'
                            : 'tw-followCard-button'

                            //Como crear un estado
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de David" src={`https://unavatar.io/x/${userName}`}></img>
                <div className='tw-followCard-info'>
                   <strong>{children}</strong>
                   {/* si queremos usar childrens especificamente como lo conocemos, debemos usar solo esa palabra reservada o especial children */}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}

//Utilidad o hooks, es lo que es react, la vida de react
//Los hooks son permiten añadir cierta funcionalidad a los componentes de react o poder ejecutar codigo arbitrario cuando ocurren ciertas cosas en tus componentes o tener algun tipo de funcionalidad de mejorar tanto el rendimiento de los componentes.
//Entendamoslo como utilidades que permiten en react  para dotar de mas funcionalidades a los componentes en diferentes puntos de renderizado 

//Ahora, para que va a servir el user state:
// //En etse caso, para la practica que estamos haciendo, nos va a servir para poder guardar una variable que nos diga si estamos o no estamos siguiendo a ese usuario

// const state = useState(false)//Tenemos que decirle cual es el valor por defecto de ese estado
//     //Este state devuelve un array, un array de dos posiciones 
//     const isFollowing = state[0]//La primera posicion es el valor del estado: 
//     const setIsFollowing = state[1]//La segunda posicion, lo que tenemso es una funcion que nos va a permitir actualizar el estado para la nueva versión 

//Si queremos entenderlo en por ejemplo con el encendido y apagado de una luz de tu habitación: 
//----- const isFollowing = state[0]//Seria el valor por defecto, es decir, foco o luz apagada
//-----     const setIsFollowing = state[1]//Este seria el interruptor, para indicar si seguimos dejandola apagada (no la tocamos) o la encedemos . 
//Es decir nos permite cambiar el estado