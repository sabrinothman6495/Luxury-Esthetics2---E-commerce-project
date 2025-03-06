import Service from '../models/Service.js'; // No need to import 'find'

export async function getAllServices(_req, res) {
  try {
    const services = await Service.find(); // Call find directly on the model
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function addService(req, res) {
  try {
    const { name, description, price, duration } = req.body;
    const service = new Service({ name, description, price, duration });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
