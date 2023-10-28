import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="content">
        <p className="star-TL">+</p>
        <p className="star-TR">+</p>

        <div className="mask-base">
          <div className="base">
            
            <span className="sun"/>

            <div className="horizon-line"/>

            <div className="reflex">
              <span className="shadow"/>
              <span className="shadow"/>
              <span className="shadow"/>
            </div>

            <div className="waves">
              <span className="wave"/>
              <span className="wave"/>
              <span className="wave"/>
            </div>
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
