// Step 1: Import React
import * as React from 'react'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tajDxBaPBBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>test2</p>
      <iframe width="560" height="315" src="https://www.pennovation.upenn.edu/news/how-femmehacks-inspired-200-women-keep-pursuing-tech-careers" title="Test" frameborder="0"></iframe>
      <p>test5</p>
      <object data="https://www.pennovation.upenn.edu/news/how-femmehacks-inspired-200-women-keep-pursuing-tech-careers" width="400" height="300" type="text/html"></object>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage