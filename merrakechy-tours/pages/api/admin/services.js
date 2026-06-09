import path from 'path';
import fs from 'fs';
import { checkAuth } from '../../../lib/auth';

const DATA_PATH = path.join(process.cwd(), 'data', 'services.json');

function readData() {
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
}
function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export default function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Unauthorized' });

  const data = readData();
  const { category, id } = req.query;

  const validCategories = ['activities', 'tours', 'transport'];
  if (category && !validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  // GET - list all
  if (req.method === 'GET') {
    return res.status(200).json(category ? data[category] : data);
  }

  // POST - add new service
  if (req.method === 'POST') {
    const item = req.body;
    if (!item.title || !category) return res.status(400).json({ error: 'Missing fields' });
    item.id = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    // ensure unique id
    const exists = data[category].find(s => s.id === item.id);
    if (exists) item.id = item.id + '-' + Date.now();
    data[category].push(item);
    writeData(data);
    return res.status(200).json(item);
  }

  // PUT - update existing service
  if (req.method === 'PUT') {
    const item = req.body;
    if (!item.id || !category) return res.status(400).json({ error: 'Missing id' });
    const idx = data[category].findIndex(s => s.id === item.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    data[category][idx] = item;
    writeData(data);
    return res.status(200).json(item);
  }

  // DELETE
  if (req.method === 'DELETE') {
    if (!id || !category) return res.status(400).json({ error: 'Missing id' });
    data[category] = data[category].filter(s => s.id !== id);
    writeData(data);
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
}
