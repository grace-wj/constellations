import './Home.css';

function Home(props) {
  return (
    <div className="Home">
      <h1 id='constellations'>constellations</h1>
      <h3 id='get-started' onClick={props.next}>get started</h3>
    </div>
  );
}

export default Home;
