const axios = require('axios');

exports.sendToApi = async (req, res) => {
	console.log(req.body.timeserie)
	try {
		const response = await axios.post('http://localhost:7000/api/send-to-elastic', {
			timeserie: req.body.timeserie,
		})
		res.json(response.data)
	} catch (e) {
		res.status(500).json(e)
	}
}