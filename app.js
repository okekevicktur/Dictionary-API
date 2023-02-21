const apiUrl= 'https://api.dictionaryapi.dev/api/v2/entries/en';

const searchWord = document.getElementById('searchwrap');
const searchTextbox = document.getElementById('search');
const word = document.getElementById('word');

const phonetic = document.getElementById('phonetic');
// const adviceTitle =  document.getElementById('advice-title');


searchWord.addEventListener('click', function(){


    let newWord=  searchTextbox.value;
    getapi(apiUrl,newWord);
})

function displayWord(wordArray){
  
    // console.log(element.phonetic);
    word.innerText = `${wordArray.word}`;
    phonetic.innerText = `${wordArray.phonetic}`;
        // adviceTitle.firstChild.innerText = `ADVICE #${advice.id}`;
        // adviceText.firstChild.innerText = advice.advice;
    
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
