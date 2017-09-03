// set up text to print, each item in array is new line
var aText = new Array(
"I am so glad you found your way to my site. Welcome to my little corner of the web.", 
"My name is Geneva. The person behind this site. I'm A 20 something computer geek from Dumaguete City." ,
"Perhaps the best way to let you know what I'm about is to share with you a quick experience I had.",
"I am an Seo Specialist by day, an a self taught programmer by night.", 
"I started learning and doing and experimenting web 2.0 stuff when i got my first online job as an SEO Link Builder",
"way back in 2010 and eventually became a full-time computer geek. So, Basically," ,
"I am very much obsessed with CODING and eventually learning programming languages thus became by major hobby." ,
"Right now, I start learning Python Programming Language so i could able to write my own plugins,",
"or application software in the future. Python seems to be the ideal language to learn for anyone who wanted" ,
"to get started because it is easy to learn, offers an easy to understand syntax,",
"and at the same time its simply the best and cleanest, and very powerful language.",
"My area of interest are SEO, Web Development and how to tweak software and keenness to learn ethical trick",
"penetration testing) as well ( for learning purpose only).",
"And oh! A Wannabe CEH ( Certified Ethical Hacker and Software Engineer",
"Here's a little more about me. I'm a September baby. I am left handed. I love cats, I have many of them :)",
"I am also fond of reading articles that covers about computer science, computer programming, and the likes.",
"Open minded, kind, sweet, friendly, optimistic, hardworking, introvert, witty and smart",
"---these are the various adjectives that would describe me.",
"Moreover, I am ambitious and reliable person with a willingness to go to the extra mile to learn more and develop my skillset.",
"Therefore, i never get tired to learn even more deeply in order to attain my goals and ambitions in life.",
"I believe in success through hard work, perseverance, & dedication. ",
"Therefore, if you want something, work hard, and you will eventually achieve it.",
  
);
var iSpeed = 30; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[1].length; // the length of the text array
var iScrollAt = 22; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 100);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();