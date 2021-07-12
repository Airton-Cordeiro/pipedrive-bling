// require("dotenv").config();
// const axios = require("axios")



// module.exports = {

//      postPedidos(req,res){

//         let config = {
//             method: "POST",
//             url: `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.TOKEN_BLING}&xml=${xml}`,
//             headers: {
//               "content-type": "application/json"
//             }
//         }
          
//       try { 
        
//         const response = axios(config);
       
//           response.then(response =>{

//             let pedidos = response.data
            
//             console.log("pedidos em JSON",pedidos)

          
            
//             res.json(pedidos)
           

//           return { pedidos }
            
//         })
            
        
//       } catch (error) {

//         let erro = {"message": "error 400 - erro na requisição"}
//         res.status(400).json(erro)
//       }
          

//     }

// }