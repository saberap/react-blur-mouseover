import React from 'react'

import { ReactBlurMouseover } from 'react-blur-mouseover'
import 'react-blur-mouseover/dist/index.css'

import Image1 from './assets/images/before.jpg';
import Image2 from './assets/images/after.jpg';

const App = () => {
  return <div style={{height:'100vh'}}><ReactBlurMouseover firstImage={{
    src: Image1,
    height: '100vh'
  }
}
secondImage={{
  src: Image2,
  height: '100vh'
}}
radius={100}
/></div>
}

export default App
