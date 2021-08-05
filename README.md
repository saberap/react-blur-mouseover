# react-blur-mouseover([demo](https://saberap.github.io/react-blur-mouseover/))

> This is a component for React that gives you the ability to view before and after photos with a blur circle.

[![NPM](https://img.shields.io/npm/v/react-blur-mouseover.svg)](https://www.npmjs.com/package/react-blur-mouseover) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-blur-mouseover
```

## Usage

```tsx
import React, { Component } from 'react'

import ReactBlurMouseover from 'react-blur-mouseover'

class Example extends Component {
  const firstImage = {
      src : 'image1.jpg',
      width: '100%',
      height: '500px'
  };
  const secondImage = {
      src : 'image2.jpg',
      width: '100%',
      height: '500px'
  };
  render() {
    return <ReactBlurMouseover
               firstImage={firstImage}
               secondImage={secondImage}
               radius={100}
               />
  }
}
```

## Props

| Property       | Type   | Default  | Description                        |
| -------------- | ------ | -------- | ---------------------------------- |
| `firstImage`   | object | Required | source, width and height of image. |
| `secondImage`  | object | Required | source, width and height of image. |
| `stdDeviation` | number | 5        | The amount of blur circle          |
| `radius`       | number | 50       | Radius of circle                   |



## License

MIT © [saberap](https://github.com/saberap)