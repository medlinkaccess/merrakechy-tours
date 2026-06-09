import { COOKIE_NAME } from '../../../lib/auth';
import { serialize } from 'cookie';

export default function handler(req, res) {
  res.setHeader('Set-Cookie', serialize(COOKIE_NAME, '', { maxAge: 0, path: '/' }));
  res.status(200).json({ ok: true });
}
