module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.json({ res: `Dear, Hello ${name}!`})
}