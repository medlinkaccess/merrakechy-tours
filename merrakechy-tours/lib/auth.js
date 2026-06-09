// Simple admin password — change this to something strong!
export const ADMIN_PASSWORD = 'merrakechy2025admin';
export const COOKIE_NAME = 'admin_session';

export function checkAuth(req) {
  const cookie = req.cookies?.[COOKIE_NAME];
  return cookie === ADMIN_PASSWORD;
}
