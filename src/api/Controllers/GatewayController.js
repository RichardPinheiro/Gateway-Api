const axios = require('axios');

exports.sendToApi = async (req, res) => {
	try {
		const response = await axios.get('/send-to-comsumer');
		res.json(response)
	} catch (e) {
		res.status(500).json(e)
	}
}