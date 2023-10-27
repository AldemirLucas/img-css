import './App.scss';

function App() {
  return (
    <div className="container">
      <span className="wave"/>

      <div className="content">
        <p className="star-TL">+</p>
        <p className="star-TR">+</p>

        <div className="mask-base">
          <div className="base">
            
            <div className="horizon-line"/>

          </div>
        </div>

        <div className="planets-BL">
          <div className="planet-small"/>
          <div className="planet-medium"/>
          <div className="planet-big"/>
        </div>

        <div className="planets-BR">
          <div className="planet-big"/>
          <div className="planet-medium"/>
          <div className="planet-small"/>
        </div>
      </div>
    </div>
  )
}

export default App;
