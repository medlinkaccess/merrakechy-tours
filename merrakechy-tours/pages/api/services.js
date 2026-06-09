import path from 'path';
import fs from 'fs';

const DATA_PATH = path.join(process.cwd(), 'data', 'services.json');

export default function handler(req, res) {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to read services' });
  }
}
