function traducir(language){
    peticion(language)
    localStorage.setItem("lenguaje", language)
}

function peticion(language){
	let titulo = `<h1 id="titulo">Mercado<span>Verde</span></h1>`;

	
	
const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/html';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '4afbc49498msh3c389067dbf1405p1de83bjsn2f1841b4442f',
		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
	},
	body: new URLSearchParams({
		from: 'auto',
		to: language,
		html: document.body.innerHTML
	})
};

if(true){
	try {
	fetch(url, options).then(response =>{
		return response.json();
	}).then(data => {
		document.body.innerHTML = data.trans;
	})
	} catch (error) {}
	}
}


if(localStorage.getItem("lenguaje") != null){
    peticion(localStorage.getItem("lenguaje"))
}