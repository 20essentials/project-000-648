import './global.css'
import { createElement, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

function Star() {
  const duration = Math.random() * 10 + 2
  const size = Math.random() * 2 + 1
  const x = Math.floor(Math.random() * window.innerWidth)
  const y = Math.floor(Math.random() * window.innerHeight)
  return (
    <div
      className="absolute rounded-full bg-white/60 animate-[moveToUp_linear_forwards_infinite]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        animationDelay: `${duration - 3}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

function App() {
  const starsCount = 300
  const stars = Array.from({ length: starsCount })

  return (
    <section className="fixed inset-0 w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#002d] to-[#111d]">
      {stars.map((_, i) => (
        <Star key={i} />
      ))}
      <img
        src="assets/forest.webp"
        alt="forest"
        className="absolute bottom-0 left-0 w-full z-50 scale-x-[1.3] pointer-events-none sm:scale-200 sm:bottom-[70px]"
      />
    </section>
  )
}

useEffect(() => {
  function handleOrientationChange() {
    const newOrientation = screen.orientation.type
    if (
      (newOrientation.startsWith('portrait') && !currentOrientation.startsWith('portrait')) ||
      (newOrientation.startsWith('landscape') && !currentOrientation.startsWith('landscape'))
    ) {
      currentOrientation = newOrientation
      location.reload()
    }
  }
  let currentOrientation = screen.orientation.type
  screen.orientation.addEventListener('change', handleOrientationChange)
}, [])

const root = createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)
