const quotes = [
    {
        name: " -Nelson Mandela" ,
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." 
        } ,
        {
        name: "-Walt Disney" ,
        quote: "The way to get started is to quit talking and begin doing."
        } ,
        {
        name: "-Eleanor Roosevelt" ,
        quote: "If life were predictable it would cease to be life, and be without flavor."
        } ,
        {
        name: "-John Lennon" ,
        quote: "Life is what happens when you're busy making other plans."
        } ,
        {
        name: "-Franklin D. Roosevelt" ,
        quote: "When you reach the end of your rope, tie a knot in it and hang on."
        } ,
        {
        name: "-Margaret Mead" ,
        quote: "Always remember that you are absolutely unique. Just like everyone else."
        } ,
        {
        name: " -Benjamin Franklin" ,
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
        } 
     
   ]
   
   const quoteBtn = document.querySelector('#quoteBtn');
   const quoteAuthor = document.querySelector('#quoteAuthor');
   const  quote = document.querySelector('#quote');
   
   quoteBtn.addEventListener('click', displayQuote);
   
   function displayQuote (){
   
   let number = Math.floor(Math.random()*quotes.length);
   console.log(number)
   quoteAuthor.innerHTML = quotes[number].name;
   quote.innerHTML = quotes[number].quote;
   
   }
