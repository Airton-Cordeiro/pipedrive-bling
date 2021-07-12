
const express = require("express");
const router = express.Router();

const ControllerPipedrive = require("../controllers/pedidos")
const ControllerBling = require("../controllers/postPedidos")

//verificar os pedidos do pipedrive
router.get("/", ControllerPipedrive.getPedidos)

//pegando os pedidos com status won do pipedrive e enviando para o bling
//router.post("/", ControllerBling.postPedidos)


module.exports = router;