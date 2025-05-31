import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  { UserName: "JonesProgrammer", name: "Juan Jimenez", isFollowing: true },
  { UserName: "KemJiga", name: "Kemer Jimenez", isFollowing: false },
  { UserName: "Alcx224", name: "Alvaro Alvarado", isFollowing: true },
];

function App() {

  return (
    <section className="App">
      {
        users.map(({UserName, name, isFollowing}) => (
            <TwitterFollowCard
              key={UserName}
              UserName={UserName}
              initialisFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
        ))
      }
        
    </section>
  );
}

export default App;