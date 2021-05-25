import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from "miragejs"
import {App} from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelancer de websites',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdrown',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-24 11:30:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = "api"
    this.get("transactions", () => {
      return this.schema.all("transaction")
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data) //data base
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


