module.exports = function makeExpressCallback(controller) {
  return (req, res) => {
    const httpRequest = {
      params: req.params,
      body: req.body
    }

    const result = controller(httpRequest);
    
    res.json(result);
  }
}