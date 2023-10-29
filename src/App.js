import './App.scss';

function App() {

  const Stars = () => {
    const circleStarsStyle = {
      position: "absolute",
      width: "330px",
      height: "330px",
      borderRadius: "50%",
    }

    const starsStyle = {
      position: "absolute",
      width: "2px",
      height: "2px",
      backgroundColor: "#f59549",
      borderRadius: "50%",
    }

    const stars = []
    const starsCount = 360/4

    for (let i = 0; i < starsCount; i++) {
      const angle = i * 6;
      const x = Math.cos((angle * Math.PI) / 180) * 48 + 50;
      const y = Math.sin((angle * Math.PI) / 180) * 48 + 50;
  
      stars.push(
        <div
          key={i}
          style={{
            ...starsStyle,
            left: `${x}%`,
            top: `${y}%`,
          }}
        ></div>
      )
    }

    return (
      <div style={circleStarsStyle}>
        {stars}
      </div>
    )
  }

  return (
    <div className="container">

      <div className="content">
        <p className="star-TL">+</p>
        <p className="star-TR">+</p>

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

        <div className="mask-base">
          <div className="base">

            <div className="bigStar">
              <span className="cross"/>
              <span className="center"/>
              <span className="cut"/>
            </div>
            
            <div className="stars">
              <div className="lineStarsF">
                <Stars/>
              </div>
              <div className="lineStarsS">
                <Stars/>
              </div>
              <div className="lineStarsT">
                <Stars/>
              </div>
              <div className="lineStarsQ">
                <Stars/>
              </div>
              <div className="lineStarsX">
                <Stars/>
              </div>
              <span className="barrerLineStars"/>
            </div>

            <span className="sun"/>

            <div className="pyramids">
              <span className="pyramid"/>
              <span className="pyramid"/>
              <div className="pyramidCenter">
                <span className="shadow"/>
                <span className="light"/>
              </div>
            </div>

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
      </div>
    </div>
  )
}

export default App;
