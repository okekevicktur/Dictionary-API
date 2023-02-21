const apiUrl= 'https://api.dictionaryapi.dev/api/v2/entries/en';

const searchWord = document.getElementById('searchwrap');
const searchTextbox = document.getElementById('search');
const word = document.getElementById('word');
const phonetic = document.getElementById('phonetic');
const partOfSpeech = document.getElementById('speech-type');
const definition1 = document.getElementById('meaning1');
const definition2 = document.getElementById('meaning2');
const definition3 = document.getElementById('meaning3');
const synonyms = document.getElementById('synonym');
const partOfSpeech2 = document.getElementById('speech-verb');
const verbMeaning1 = document.getElementById('verbMeaning');
const example = document.getElementById('example');

// const adviceTitle =  document.getElementById('advice-title');


searchWord.addEventListener('click', function(){


    let newWord=  searchTextbox.value;
    getapi(apiUrl,newWord);
})

function displayWord(wordArray){
  
    // console.log(element.phonetic);
    word.innerText = `${wordArray.word}`;
    phonetic.innerText = `${wordArray.phonetic}`;
    partOfSpeech.innerText = `${wordArray.meanings[0].partOfSpeech}`;
    definition1.innerText= `${wordArray.meanings[0].definitions[0].definition}`;
    definition2.innerText= `${wordArray.meanings[0].definitions[1].definition}`;
    definition3.innerText= `${wordArray.meanings[0].definitions[2].definition}`;
    const synonymsArray= wordArray.meanings[1].synonyms;
    if (synonymsArray.length != 0) {
        if (synonymsArray.length > 4){
            // console.log(length.synonymsArray);const slicedArray = array.slice(0, n);
            let  newSynonyms = synonymsArray.slice(0, 3);
            synonyms.innerText= `${newSynonyms}`;
           // return;
        }
        else { synonyms.innerText= `${synonymsArray}`;}
    }else{
        synonyms.innerText= `.............`;
    }
    
    //Display Verb section
    partOfSpeech2.innerText = `${wordArray.meanings[1].partOfSpeech}`;
    verbMeaning1.innerText= `${wordArray.meanings[1].definitions[0].definition}`;
    example.innerText = `${wordArray.meanings[1].definitions[0].example}`;
    console.log(wordArray.meanings[1].definitions[0].example);
    // adviceTitle.firstChild.innerText = `ADVICE #${advice.id}`;
    // adviceText.firstChild.innerText = advice.advice;
    // For example, the li:nth-child(2) selects the second <li> element in a list:

    // let listItem = document.querySelectorAll('li:nth-child(2)');
    // To select all li elements that are directly inside a <ul> element with the class nav:
    // let listItems = document.querySelectorAll('ul.nav > li');
}
//Defining async function
async function getapi(url,wordNew){
          //storing response
        const response = await fetch(`${url}/${wordNew}`);

        //storing data in form of JSon
        var data = await response.json();
        const element = data[0];
        displayWord(element)   
        // return element;
        
        // if (response) {
        //     displayAdvice(element)

       
    
    } 

    //  var data = '{"name": "mkyong","age": 30,
    //  "address": {"streetAddress": "88 8nd Street","city": "New York"},
    //  "phoneNumber": [{"type": "home","number": "111 111-1111"},
    //  {"type": "fax","number": "222 222-2222"}]}';

	// var json = JSON.parse(data);
			
	// alert(json["name"]); //mkyong
	// alert(json.name); //mkyong
	
	// alert(json.address.streetAddress); //88 8nd Street
	// alert(json["address"].city); //New York
			
	// alert(json.phoneNumber[0].number); //111 111-1111
	// alert(json.phoneNumber[1].type); //fax
			
	// alert(json.phoneNumber.number); //undefined
