import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <form className="Gas-form">
            <div >
                <h2> Calculadora de Gasolina</h2>
                <hr/>
                <h4>Quilometragem media em cada combustivel: </h4> 
                <p>     Valores em Km!</p>
                <div className="input-group">
                  <div class="input-column">
                    <label for="input1">Gasolina:</label>
                    <input type="number" name="input1" id="input1" placeholder="0"/>
                  </div>
                  <div class="input-column">
                    <label for="input2">Etanol:</label>
                    <input type="number" name="input2" id="input2" placeholder="0"/>
                  </div>
                </div>
                <h4>Media de quilometros semanis percorridos:</h4> 
                <p>     Valores em Km!</p>
                <div className="input-group">
                  <div class="input-column">
                    <label for="input3">Distancia percorrida:</label>
                    <input type="number" name="input3" id="input3" placeholder="0"/>
                  </div>
                </div>
                <h4>Valoes dos combistiveis: </h4> 
                <p>     Valores em R$!</p>
                <div className="input-group">
                  <div class="input-column">
                    <label for="input1">Gasolina:</label>
                    <input type="number" name="input1" id="input1" placeholder="00,00" step="0.01"/>
                  </div>
                  <div class="input-column">
                    <label for="input2">Etanol:</label>
                    <input type="number" name="input2" id="input2"placeholder="00,00" step="0.01"/>
                  </div>
                </div>
                <div className="button-container">
                  <button type="submit">Enviar</button>
                </div>
            </div>
          </form>
      </header>
    </div>
  );
}

export default App;
