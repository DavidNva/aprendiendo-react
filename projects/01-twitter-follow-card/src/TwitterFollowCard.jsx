import { useState } from 'react'

export function TwitterFollowCard({children, userName='uknown'}){//Como crear un estado
    const [isFollowing, setIsFollowing] = useState(false)
    console.log('[TwitterFollowCard] render with userName: ', userName)
    
    const text = isFollowing? 'Suguiendo' : 'Seguir'
    const buttonClassName = isFollowing
                            ? 'tw-followCard-button is-following'
                            : 'tw-followCard-button'

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)//De falso a verdadero o viceversa segun este el estado en el momento 
    }//Seria un estado interno, porque esta al nivel de cada uno de los elementos que crea el componente, no esta compartido entre elementos

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
                <button className={buttonClassName} onClick={handleClick}>
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