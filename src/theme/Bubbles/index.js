import React from 'react'
import ReactDOMServer from 'react-dom/server'

export default function Bubbles({mode}) {
  return (
    <svg
      width="459"
      height="596"
      viewBox="0 0 459 596"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="275.5"
        cy="463.5"
        r="261.5"
        fill={mode === 'light' ? '#F2F2F2' : '#181F22'}
      />
      <circle
        cx="374"
        cy="277"
        r="213"
        fill={mode === 'light' ? '#F2F2F2' : '#181F22'}
        stroke={mode === 'light' ? 'white' : '#030506'}
        stroke-width="64"
      />
      <circle
        cx="170"
        cy="170"
        r="138"
        fill={mode === 'light' ? '#F2F2F2' : '#181F22'}
        stroke={mode === 'light' ? 'white' : '#030506'}
        stroke-width="64"
      />
    </svg>
  )
}

Bubbles.url = (mode) => {
  const BubblesSVG = ReactDOMServer.renderToStaticMarkup(
    <Bubbles mode={mode} />,
  )

  return `data:image/svg+xml;base64,${Buffer.from(BubblesSVG).toString(
    'base64',
  )}`
}
