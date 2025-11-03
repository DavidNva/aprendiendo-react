import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: "DavidNvaG",
        name:"David Nava Garcia",
        isFollowing:true
    },
    {
        userName: "midudev",
        name:"Miguel Angel Durán",
        isFollowing:true
    },
    {
        userName: "elonmusk",
        name:"Elon Musk",
        isFollowing:false
    }
]

export function App(){
    return (
        <section className='App'>
            {//Lo envolvemos con llaves, utilizamos las llaves porque lo que devuelve el mapeo de usuarios es lo que queremos renderizar. Las llaves son para evaluarlo 
                users.map(({userName, name, isFollowing})=>(
                        <TwitterFollowCard 
                        key={userName}//en este caso, una red social: twitter, no tiene sentido o no es posible repetir un nombreUsuario ya registrado (en una base de datos podemos usar el id de este). 
                        //Podemos usar username + avatar, etc. el punto es que sea un idUnico
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section> 
    )
}

//NOTA: Cuando renderizamos una lista de elementos (un array) en react, tenemos que añadir tambien la key. Esto debido a que es un identificador unico para este elemento. Es importante para que react sepa, nosotros tenemos que indicarle que vas a utilizar el DOM virtual, para que seas capaz de saber exactamente a que elementos me estoy referiendo en un array, te voy a identificar el elemento del array, y eso es con algo que sea unico, es decir una key (como una primary key en BD SQL)
/*       users.map(user=>{
//                     const {userName, name, isFollowing} = user
//                     return(
//                         <TwitterFollowCard 
//                         userName={userName}
//                         initialIsFollowing={isFollowing}
//                         >
//                             {name}
//                         </TwitterFollowCard>
//                     )
//                 })
// }}/*///podemos usar el return directamnet eo no indicar ese return, solo colocarlo como se dejo arribas