const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";

const voosDomesticosLatam = db.voos.count(
  {
    natureza: "Doméstica",
    "empresa.nome": LATAM_AIRLINES_BRASIL,
  },
);

db.resumoVoos.insertOne({
  empresa: LATAM_AIRLINES_BRASIL,
  totalVoosDomesticos: voosDomesticosLatam,
});

db.resumoVoos.findOne(
  {
    empresa: LATAM_AIRLINES_BRASIL,
  },
  {
    empresa: true,
    totalVoosDomesticos: true,
    _id: false,
  },
);
