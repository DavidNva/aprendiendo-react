import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return (
        //Esta siguiente forma es de hacer React.Fragment
        <section className='App'>
            <TwitterFollowCard userName="DavidNvaG" name="David Nava Garcia"></TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk" name="Elon Musk"></TwitterFollowCard>
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran"></TwitterFollowCard>
        </section>
        
    )
}