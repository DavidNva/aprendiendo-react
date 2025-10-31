import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  //crear props como funciones:
  const formatUserName = (userName) => `@${userName}`;
  return (
    //Esta siguiente forma es de hacer React.Fragment
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="DavidNvaG"
        name="David Nava Garcia"
      ></TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="elonmusk"
        name="Elon Musk"
      ></TwitterFollowCard>
      
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="midudev"
        name="Miguel Angel Duran"
      ></TwitterFollowCard>
    </section>
  );
}
