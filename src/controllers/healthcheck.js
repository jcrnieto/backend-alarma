
const healthCheck = async (req, res) => {
    try {
        res.json({ ok: true });
      } catch (err) {
        console.log(err);
      }
}

module.exports = {
    healthCheck,
};
  