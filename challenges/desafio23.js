db.voos.findOne(
  {
    litrosCombustivel: {
      $lte: 1000,
      $exists: true,
    },
  },
  {
    vooId: true,
    litrosCombustivel: true,
    _id: false,
  },
);
