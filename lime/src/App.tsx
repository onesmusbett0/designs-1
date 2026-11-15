import "./App.css"
const App = () => {
  return (
    <>
    <body>     
      <nav>
        <h3 style={{
          fontFamily: "'Goldman', 'Sans Serif'", 

        }}>FEEDBACK</h3>
        <div>
          <h4>LINEUP</h4>
          <h4>CATALOQUE</h4>
          <h4>INFO</h4>
        </div>
        <button>Get Deals Now</button>
      </nav>
      {/* Main block */}
      <main>
        <div>
          <h1>LOUDER</h1>
          <h1>AFTER   DARK</h1>
        </div>
        <img src="bg.png" alt="Cover image" />
      </main>
    </body>
    </>
  )
}

export default App