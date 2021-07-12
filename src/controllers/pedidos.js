require("dotenv").config();
const axios = require("axios")

module.exports = {

     getPedidos(req,res){

        let config = {
            method: "GET",
            url: `${process.env.API_PIPEDRIVE}`,
            headers: {
              "content-type": "application/json"
            }
        }
          
      try { 
        
        const response = axios(config);
       
          response.then(response =>{

            let pedidos = response.data
            
            

            for (let i=0 ; pedidos.data.length; i++ ){


              let arrayPedidos = []

              if (pedidos.data[i].status == 'won'){

                console.log("-------------------------------------------")
                arrayPedidos.push(JSON.stringify(pedidos.data[i]))
                
              }
              console.log(arrayPedidos)
            }

            // PARA IMPORTAR O RETORNO DO PEDIDOS OLHAR NO ARQUIVO PIX_SAMPLES
            // AUTH.JS E VER COMO FOI IMPORTADO O TOKEN E USAR COMO REFERENCIA

            console.log(pedidos)
            
            res.json(pedidos);
           

          return pedidos; 
            
        })
            
        
      } catch (error) {

        let erro = {"message": "error 400 - erro na requisição"}
        res.status(400).json(erro)
      }
          

    }

}