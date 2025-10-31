export function TwitterFollowCard({children,userName = 'unknown', isFollowing}){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de David" src={`https://unavatar.io/x/${userName}`}></img>
                <div className='tw-followCard-info'>
                   <strong>{children}</strong>
                   {/* si queremos usar childrens especificamente como lo conocemos, debemos usar solo esa palabra reservada children */}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}