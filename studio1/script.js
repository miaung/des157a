(function() {
    'use strict';
    console.log("reading js");

    message.addEventListener('submit', function(event){
        event.preventDefault();
        const fName = document.querySelector('#fName').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const clothing = document.querySelector('#clothing').value;
        const noun2 = document.querySelector('#noun2').value;
        const animal = document.querySelector('#animal').value;
        const adj2 = document.querySelector('#adj2').value;
    
        let myText; // defined for use below
    
        if(fName == ''){
            myText = "Please provide a noun"
            document.querySelector('#fName').focus();
        }
        else if(adj1 == ''){
            myText = "Please provide another noun"
            document.querySelector('#adj1').focus();
        }
        else if(noun1 == ''){
            myText = "Please provide an adjective"
            document.querySelector('#noun1').focus();
        }
        else if(clothing == ''){
            myText = "Please provide a verb"
            document.querySelector('#clothing').focus();
        }
        else if(noun2 == ''){
            myText = "Please provide a verb"
            document.querySelector('#noun2').focus();
        }
        else if(animal == ''){
            myText = "Please provide a verb"
            document.querySelector('#animal').focus();
        }
        else if(adj2 == ''){
            myText = "Please provide a verb"
            document.querySelector('#adj2').focus();
        }
        else {
            myText = `${fName}, we're over. It's you, not me. When I look at you, I just can't stand how ${adj1} you are. You don't buy me ${noun1} every weekend, your ${clothing} are so outdated, and you stink so bad of ${noun2}. Whenever I show my friends your pictures, they laugh and say you look like an ${animal}. I thought I could get over it, but it's the only thing on my mind recently. I just can't take it anymore. Goodbye, and good luck with your ${adj2} issues.`;
        }
    
        madlib.innerHTML = myText;
    });    
})();