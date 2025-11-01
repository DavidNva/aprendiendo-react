import { useState } from 'react'

export function TwitterFollowCard({children, userName='unknown', initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    //console.log('[TwitterFollowCard] render with userName: ', userName)
    
    const text = isFollowing? 'Suguiendo' : 'Seguir'
    const buttonClassName = isFollowing
                            ? 'tw-followCard-button is-following'
                            : 'tw-followCard-button'

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

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
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
