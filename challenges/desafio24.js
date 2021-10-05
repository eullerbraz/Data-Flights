db.voos.findOne(
  {
    litrosCombustivel: {
      $lte: 600,
      $exists: true,
    },
    "empresa.nome": {
      $nin: ["GOL", "AZUL"],
    },
  },
  {
    vooId: true,
    "empresa.nome": true,
    litrosCombustivel: true,
    _id: false,
  },
);
