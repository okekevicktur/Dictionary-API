const apiUrl= 'https://api.dictionaryapi.dev/api/v2/entries/en';

const searchWord = document.getElementById('searchwrap');
const searchTextbox = document.getElementById('search');
const word = document.getElementById('word');
const phonetic = document.getElementById('phonetic');
const partOfSpeech = document.getElementById('speech-type');
const definition1 = document.getElementById('meaning1');
const definition2 = document.getElementById('meaning2');
const definition3 = document.getElementById('meaning3');
const synonyms = document.getElementById('synonymsis');
const partOfSpeech2 = document.getElementById('speech-verb');
const verbMeaning1 = document.getElementById('verbMeaning');
const example = document.getElementById('example');
const source = document.getElementById('sourceLink');
const play = document.getElementById('play-wrap');
const audio = document.getElementById('audio');
const SecondMeaning = document.querySelector('.meaning-header');
// const adviceTitle =  document.getElementById('advice-title');

const audioSource = "";

// .dark{
//     background-color: #222;
//     color: #e6e6e6;
{/* <button onclick="myFunction()">Switch mode</button> 
      
      <script>
          function myFunction() {
          var element = document.body;
          element.classList.toggle("dark");
          }
      </script> */}






play.addEventListener('click', function(){
    if (searchTextbox.value === "" && audioSource ==="") {
        alert('Please type a word');
   }else{
        let newWord=  searchTextbox.value;
        // getapi(apiUrl,newWord);
        fetchSound();
   }
    

})
searchWord.addEventListener('click', function(){
   if (searchTextbox.value === "") {
        alert('Please type a word');
   }else{
        let newWord=  searchTextbox.value;
        getapi(apiUrl,newWord);
   }
    
})
function checkUndefined(isUndefined){
    if (isUndefined && isUndefined.length > 0 && isUndefined !== "undefined")  {
        
       return `${isUndefined}`;
   }
   else{
         return   '';
   }
}

function fetchSound(){
    audio.play();
    
}

function displayWord(wordArray){
   
    word.innerText = `${wordArray.word}`;
    if(checkUndefined(`${wordArray.phonetic}`) === ''){
         phonetic.innerText = checkUndefined(`${wordArray.phonetics[1].text}`);
    }else{
        phonetic.innerText = checkUndefined(`${wordArray.phonetic}`);
    }
    partOfSpeech.innerText = `${wordArray.meanings[0].partOfSpeech}`;
    if (wordArray.meanings[0].definitions.length > 1){
        if (wordArray.meanings[0].definitions.length < 3){
            definition1.innerText= `${wordArray.meanings[0].definitions[0].definition}`;
            definition2.innerText= checkUndefined(`${wordArray.meanings[0].definitions[1].definition}`);
            definition3.remove();
        }else{
            definition1.innerText= `${wordArray.meanings[0].definitions[0].definition}`;
            definition2.innerText= checkUndefined(`${wordArray.meanings[0].definitions[1].definition}`);
            definition3.innerText= checkUndefined(`${wordArray.meanings[0].definitions[2].definition}`);
        }      
    }else{
        definition1.innerText= `${wordArray.meanings[0].definitions[0].definition}`;
        definition2.remove();
        definition3.remove();
    }
    const means= wordArray.meanings;
    const countMean =  wordArray.meanings.length;
    means.forEach(mean => {
        if(mean.synonyms.length < 1 ){
            synonyms.innerText = '';
           
        }else{
            synonyms.innerText = mean.synonyms;
                      
        }

        if (countMean>1) {
            if(mean.partOfSpeech){
                document.getElementById('verbcontainer').style.display ="block";

                partOfSpeech2.innerText = mean.partOfSpeech;
                verbMeaning1.innerText= checkUndefined(`${wordArray.meanings[1].definitions[0].definition}`);
                example.innerText = checkUndefined(`${wordArray.meanings[1].definitions[0].example}`)
            }else{
                partOfSpeech2.innerText='';
                verbMeaning1.innerText='';
                example.innerText='';
                SecondMeaning.innerText='';
                document.getElementById('verbcontainer').style.display ="none";
            }
        }else{
            partOfSpeech2.innerText='';
            verbMeaning1.innerText='';
            example.innerText='';
            SecondMeaning.innerText='';
            document.getElementById('verbcontainer').style.display ="none";
        }
        
    });
    source.innerText = checkUndefined(`${wordArray.sourceUrls}`);
    source.href = checkUndefined(`${wordArray.sourceUrls}`);
    const audioSource= `${wordArray.phonetics[0].audio}`;
    // console.log(audioSource);
    document.getElementById('audio').setAttribute('src', `${audioSource}`);
    // function playSound () {
    //     let ding = new Audio('ding.mp3');
    //     ding.play();
    // }

    // For example, the li:nth-child(2) selects the second <li> element in a list:
    // let listItem = document.querySelectorAll('li:nth-child(2)');
    // To select all li elements that are directly inside a <ul> element with the class nav:
    // let listItems = document.querySelectorAll('ul.nav > li');
}
//Defining async function
async function getapi(url,wordNew){
          //storing response
        const response = await fetch(`${url}/${wordNew}`);
        if (response.ok) {
            //storing data in form of JSon
            var data = await response.json();
            const element = data[0];
            displayWord(element);  
        }
         else{
            alert("word not available");
         }
    } 

