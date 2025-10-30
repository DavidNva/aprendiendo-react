import './App.css'

export function App(){
    return (
        <article style={{display:'flex', alignItems:'center', color:'#fff'}}>
            <header>
                <img src="https://davidnavadev.netlify.app/images/perfil_original.webp"  style={{ width: "120px", height: "120px", borderRadius: "8px"}}></img>
                <div>
                    <strong>David Nava Garcia</strong>
                    <span>@davidng</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}