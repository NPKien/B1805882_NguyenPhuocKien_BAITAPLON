const {Nhaxuatban} = require('../models/index');


exports.getAllNxb = async (req, res) => {
  try {
    const nxbs = await Nhaxuatban.find();
    res.json(nxbs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getnxbId = async (req, res) => {
  try {
    const nxb = await Nhaxuatban.findById(req.params.id);
    res.json(nxb);
  } catch (err) {
    res.status(404).json({ message: 'nxb not found' });
  }
};


exports.updatenxb = async (req, res) => {
  try {
    const updatednxb = await Nhaxuatban.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatednxb);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deletenxb = async (req, res) => {
  try {
    await Nhaxuatban.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted nxb' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.searchnxbByName = async (req, res) => {
  const searchQuery = req.query.name; 

  try {
    const nxbs = await Nhaxuatban.find({ TENNXB: { $regex: new RegExp(searchQuery, 'i') } });
    res.json(nxbs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

