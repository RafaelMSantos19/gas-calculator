const express = require('express');
const app = express();
const PORT = 3090;

// Middleware para análise de corpos de requisição no formato JSON
app.use(express.json());

// Rota de exemplo
app.get('/api/exemplo', (req, res) => {
  res.json({ message: 'Olá, mundo!' });
});

// Rota para lidar com outros endpoints
// app.use('/api/outros', require('./rotas/outros'));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
