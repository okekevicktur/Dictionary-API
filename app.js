const apiUrl= 'https://api.dictionaryapi.dev/api/v2/entries/en';

const searchWord = document.getElementsByClassName('search-icon');
const searchTextbox = document.getElementById('search');
// const adviceTitle =  document.getElementById('advice-title');

searchWord.addEventListener('click', function(){
//    alert( randomizeSlip());


//    adviceTitle.firstChild.innerText = `ADVICE #${randomizeSlip()}`;
    // displayAdvice();
    // document.getElementById("myText").value
    let newWord=  searchTextbox.value;
    alert(newWord);
    // getapi(apiUrl);
})

function displayAdvice(advice){
  

        adviceTitle.firstChild.innerText = `ADVICE #${advice.id}`;
        adviceText.firstChild.innerText = advice.advice;
    
}
//Defining async function
async function getapi(url,word){
          //storing response
        const response = await fetch(`${url}/${word}`);

        //storing data in form of JSon
        var data = await response.json();
        console.log(data);
        return;
        if (response) {
            displayAdvice(data.slip)
        }
       
    
    }
