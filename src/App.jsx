import React, { useState, useEffect } from 'react'
import {
  FourZeroFourContainer,
  FourZeroFourImg,
  FourZeroFourNavBar,
  FourZeroFourOops,
  FourZeroFourLinks,
} from "./styles"

function App() {
  const [state, setState] = useState(1);
  useEffect(() => {
    let index = Math.floor(Math.random() * 20 + 1);
    setState(index);
  }, []);
  return (

    <>
      <FourZeroFourContainer>
        <FourZeroFourOops>
          The page is either broken or no longer developed by Pangu
        </FourZeroFourOops>
        <FourZeroFourImg src={`/src/assets/${state}.svg`} />
      </FourZeroFourContainer>


    </>

  )
}
export default App