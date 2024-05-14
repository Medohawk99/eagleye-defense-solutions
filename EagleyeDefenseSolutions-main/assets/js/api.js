const url = 'https://seeking-alpha.p.rapidapi.com/symbols/get-ratings?symbol=aapl';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9a01f77589msha7d62d06bc5665ep178840jsn0f2de88c678e',
		'x-rapidapi-host': 'seeking-alpha.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}