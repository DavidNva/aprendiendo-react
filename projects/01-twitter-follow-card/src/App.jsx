import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard userName="DavidNvaG" isFollowing>
               David Nava Garcia
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>
        </section> 
    )
}