const Finance = require('../models/finaceModel');
require('dotenv').config();

class financeController {
  async create(req, res) {
    try {
      const { name, value, date, state } = req.body;


      console.log('Dados recebidos:', { name, value, date, state });
      if (
        name === undefined ||
        value === undefined ||
        date === undefined ||
        state === undefined
      ) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      }

      const financeData = await Finance.create({
        name,
        value,
        date,
        state,
      });

      res.status(201).json(
        {
          "data": "financeData",
          "message": 'sucesso!'
        }
      );
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async show(req, res) {
    try {
      console.log('Requisição recebida para mostrar finanças');
      res.setHeader('Content-Type', 'application/json');
      const financeResult = await Finance.find();
      res.status(200).json(financeResult);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

module.exports = new financeController();