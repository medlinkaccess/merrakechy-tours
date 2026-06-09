import { ADMIN_PASSWORD, COOKIE_NAME } from '../../../lib/auth';
import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.setHeader(
      'Set-Cookie',
      serialize(COOKIE_NAME, ADMIN_PASSWORD, {
        httpOnly: true,
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/',
        sameSite: 'lax',
      })
    );
    return res.status(200).json({ ok: true });
  }
  res.status(401).json({ error: 'Wrong password' });
}
