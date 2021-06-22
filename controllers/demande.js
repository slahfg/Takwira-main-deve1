const demandePAQuerys = require("../db/demandePA");
const demandeRDQuerys = require("../db/demandeRD");
const demandeVEQuerys = require("../db/demandeVE");
const demandeMCQuerys = require("../db/demandeMC");

const getTitle = (key) => {
  switch (key) {
    case "PA":
      return "Demande d'extraction papier administratif";
    case "RD":
      return "Demande de report demarcation";
    case "VE":
      return "Demande de voir epreuve";
    case "MC":
      return "Demande de modification de chemin";
    default:
      return "";
  }
};
const generateDemande = (key) => (d) => ({
  key,
  title: getTitle(key),
  id: d._id,
  status: d.status,
  name: d.name,
  cin: d.cin,
  dateDemande: d.dateDemande,
});

exports.getAllDemandes = async (req, res, next) => {
  try {
    const cin = req.query.cin;
    const page = Number(req.query.page ? req.query.page : 0);
    const nbElements = Number(req.query.nbElements ? req.query.nbElements : 10);

    const [demandesPA, errorPA] = await demandePAQuerys.getAllByCin(cin);
    const [demandesMC, errorMC] = await demandeMCQuerys.getAllByCin(cin);
    const [demandesRD, errorRD] = await demandeRDQuerys.getAllByCin(cin);
    const [demandesVE, errorVE] = await demandeVEQuerys.getAllByCin(cin);
    const error = { errorPA, errorMC, errorVE, errorRD };

    const demandes = [
      ...demandesPA.map(generateDemande("PA")),
      ...demandesMC.map(generateDemande("MC")),
      ...demandesRD.map(generateDemande("RD")),
      ...demandesVE.map(generateDemande("VE")),
    ]
      .sort((a, b) => (a.dateDemande >= b.dateDemande ? 1 : -1))
      .slice(page * nbElements, page * nbElements + nbElements);

    res.status(200).json({
      demandes,
      error,
    });
  } catch (error) {
    res.status(403).json({ error });
  }
};

exports.demandePA = async (req, res, next) => {
  try {
    let [demande, error] = await demandePAQuerys.saveDemande(req.body);

    if (error) throw new Error(error.message);

    res.status(200).json({ ...demande, status: true });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
    console.error(error.message);
  }
};
exports.demandeRD = async (req, res, next) => {
  try {
    let [demande, error] = await demandeRDQuerys.saveDemande(req.body);
    if (error) throw new Error(error.message);
    res.status(200).json(demande);
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
    console.error(error.message);
  }
};
exports.demandeVE = async (req, res, next) => {
  try {
    let [demande, error] = await demandeVEQuerys.saveDemande(req.body);
    if (error) throw new Error(error.message);
    res.status(200).json(demande);
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
    console.error(error.message);
  }
};
exports.demandeMC = async (req, res, next) => {
  try {
    let [demande, error] = await demandeMCQuerys.saveDemande(req.body);
    if (error) throw new Error(error.message);
    res.status(200).json(demande);
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
    console.error(error.message);
  }
};
