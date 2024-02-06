

async function dataCall(){
	const url = 'https://wordsapiv1.p.rapidapi.com/words/zest/definitions';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '2772b8f31emsh0e059d1238a670bp10b62fjsn902d5467abfe',
			'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		const wordHeader = document.createElement("h1")
		wordHeader.textContent = result.word
		document.getElementById("def-container").appendChild(wordHeader)
		result.definitions.forEach(function (definition){
			const newCard=`
			<div class="max-w-sm rounded overflow-hidden shadow-lg">
			<div class="px-6 py-4">
			  <div class="font-bold text-xl mb-2">${definition.partOfSpeech}</div>
			  <p class="text-gray-700 text-base">
				${definition.definition}
			  </p>
			</div>
		  </div>`;
		  const cardContainer = document.createElement("div")
		  cardContainer.innerHTML=newCard
		  document.getElementById("def-container").appendChild(cardContainer)
		})
	} catch (error) {
		console.error(error);
	}

}

dataCall() 