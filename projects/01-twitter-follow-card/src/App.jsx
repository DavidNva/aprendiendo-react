import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const david = {isFollowing:true, userName:"DavidNvaG"}
    const elonmusk = {isFollowing:false, userName:"elonmusk"}
    return (
        //Esta siguiente forma es de hacer React.Fragment
        <section className='App'>
            <TwitterFollowCard {...david}>
               David Nava Garcia
                {/* <TwitterFollowCard isFollowing={false} userName="elonmusk" name="Elon Musk"></TwitterFollowCard> Por ejemplo, aqui incluimos un componente dentro de otro componente y es OK, es literalmetne como lo hacemos con HTML, un elemento padre (por ejemplo un div) y elementos hijos, h1, etc. por ejemplo un header table, tiene su rows, sus th, sus, rr, th*/}
               {/* Incluso mas cosas es como si fuera un campo libre. Como si dejamos que el componente sea aun mas reutilizable, cuando queramos que el componente sea  muy extensible, entonces usamos esta forma de children */}
                {/* en children podemos poner texto, otro elemento, ejemplo un <p>David Nava Garcia</p>, otro componente, etc, etc. Esto es justamente la compotenizacion */}
            </TwitterFollowCard>
            <TwitterFollowCard {...elonmusk}>
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>
            {/* <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran"></TwitterFollowCard> */}
        </section>
        
    )
}