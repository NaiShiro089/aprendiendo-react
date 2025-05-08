import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <h1>You might like</h1>
            
            <TwitterFollowCard 
            isFollowing 
            userName="Tenz" 
            tagName="TenZOfficial"
            />

            <TwitterFollowCard 
            isFollowing={false} 
            userName="Senzawa" 
            tagName="sensenzawa"
            />

            <TwitterFollowCard 
            isFollowing={false} 
            userName="Horcus" 
            tagName="Horcus"
            />

            <a href="#"><span>Show more</span></a>
        </section>
    )
}