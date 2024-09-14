//guess my favourite movie 

let fav_movie="avatar";

let guess=prompt("Guess my Favourite Movie");

 while( (guess != fav_movie) && (guess !="quit"))  {

       guess = prompt("Wrong guess......try again");

   }

   if(guess == fav_movie)  
   {
      console.log("Congrats");
   }
   else
   {
      console.log("You quit");
   }