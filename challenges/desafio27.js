const PASSAREDO = "PASSAREDO";

const voosDomesticosPassaredo = db.voos.count(
  {
    natureza: "Doméstica",
    "empresa.nome": PASSAREDO,
  },
);

db.resumoVoos.insertOne({
  empresa: PASSAREDO,
  totalVoosDomesticos: voosDomesticosPassaredo,
});

db.resumoVoos.findOne(
  {
    empresa: PASSAREDO,
  },
  {
    empresa: true,
    totalVoosDomesticos: true,
    _id: false,
  },
);
