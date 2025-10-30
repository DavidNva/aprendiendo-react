import './App.css'

export function App(){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de David" src="https://davidnavadev.netlify.app/images/perfil_original.webp"></img>
                <div className='tw-followCard-info'>
                    <strong>David Nava Garcia</strong>
                    <span className='tw-followCard-infoUserName'>@davidng</span>
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