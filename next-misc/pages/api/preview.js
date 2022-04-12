export default function handler(req, res) {
  res.setPreviewData({ user: 'Murdock' });
  res.redirect(req.query.redirect);
}
