import { useState } from 'react';
import './App.scss';

function App() {
  const [primaryColor, setPrimaryColor] = useState("#f59549")
  const [bgColor, setBgColor] = useState("#191c21")

  function getRandomContrastingColors() {
    const randomColor = () => {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
  
    const primaryColor = randomColor()
    let bgColor = randomColor()

    const isContrasting = (c1, c2) => {
      const rgbPrimaryColor = parseInt(c1.slice(1), 16)
      const rgbBgColor = parseInt(c2.slice(1), 16)
      const luminancePrimaryColor = 0.299 * ((rgbPrimaryColor >> 16) & 255) + 0.587 * ((rgbPrimaryColor >> 8) & 255) + 0.114 * (rgbPrimaryColor & 255)
      const luminanceBgColor = 0.299 * ((rgbBgColor >> 16) & 255) + 0.587 * ((rgbBgColor >> 8) & 255) + 0.114 * (rgbBgColor & 255)

      return Math.abs(luminancePrimaryColor - luminanceBgColor) >= 128
    }

    while (!isContrasting(primaryColor, bgColor)) {
      bgColor = randomColor()
    }
  
    return [primaryColor, bgColor]
  }

  const fetchColor = () => {
    const [a, b] = getRandomContrastingColors()
    setPrimaryColor(a)
    setBgColor(b)
  }

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
      backgroundColor: primaryColor,
      borderRadius: "50%",
    }

    const stars = []
    const starsCount = 360/4

    for (let i = 0; i < starsCount; i++) {
      const angle = i * 6
      const x = Math.cos((angle * Math.PI) / 180) * 48 + 50
      const y = Math.sin((angle * Math.PI) / 180) * 48 + 50
  
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
    <div className="container" style={{ "--primary-color": primaryColor, "--bg-color": bgColor }}>

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

            <div className="bigStar" onClick={() => {
              setPrimaryColor("#f59549")
              setBgColor("#191c21")
            }}>
              <span className="cross">+</span>
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
            <span className="eventSun" onClick={() => fetchColor()}/>
            <span className="shadowEventSun" />

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

export default App
