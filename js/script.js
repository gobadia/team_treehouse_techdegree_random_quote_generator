/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * List of quotes from Letterkenney show characters
***/

const quotes = [
  {quote: 'Oh, come on, kitten. I won’t tell anyone.',
    source: 'Wayne'
  },
  {quote: 'Tim’s, McDonald’s, and the beer store are all closed on Christmas Day. And that’s your whole world right there',
  source: 'Wayne'
  },
  {quote: 'You wish there was a pied piper for possums. But there isn’t, so you’re just gonna have to keep picking ‘em off with a .22.',
  source: 'Wayne'
  },
  {quote: 'You knew your pal had come into money when he started throwing out perfectly good pistachios like he was above cracking ‘em open with a box cutter like the rest of us.',
  source: 'Daryl'
  },
  {quote: 'Yeah. Oh, hey, look at you, ground',
  source: 'Squirrelly Dan'
  },
  {quote: 'If you have a problem with the majestic Canadian Goose, then you have a problem with me.',
  source: 'Wayne'
  },
  {quote: 'Seeing as this is most certainly a one-off event and not a tradition that also falls on some made-up holiday that I couldn’t give a cats queef about, I’m out. There’s happiness calling my name from the bottom of a bottle of Puppers.',
  source: 'Wayne'
  },
  {quote: 'Nice onesie. Does it come in men’s?',
  source: 'Jonesy'
  },
  {quote: '…I’m too fat to run.',
  source: 'Squirrelly Dan'
  },
  {quote: '…I’m too fat to run.',
  source: 'Squirrelly Dan'
  },
  {quote: 'You’d best be preparin’ for a Donny Brook if you think I’m going to that super soft birthday party of yours.',
  source: 'Wayne'
  },
  {quote: 'We need backup, boys.',
  source: 'Jonesy'
  },
  {quote: 'Hard no.',
  source: 'Wayne'
  },
  {quote: "Oh, c’mon, where’s your jam, bud?",
  source: 'Reilly'
  },
  {quote: "Pitter-patter, let’s get at ‘er.'",
  source: 'Everyone'
  },
  {quote: "Not my pig, not my farm.",
  source: 'Wayne'
  },
  {quote: "Oh, get off the cross, we need the wood.",
  source: 'Wayne'
  },
  {quote: "Where’s the sacrifice?",
  source: 'Jonesy'
  },
  {quote: "Let’s go easy over there, Squirrelly Dan.",
  source: 'Wayne'
  },
  {quote: "And I suggest you let that one marinate.",
  source: 'Wayne'
  },
  {quote: "You’re made of spare parts, aren’t you, bud?",
  source: 'Wayne'
  }
];

/***
 * `getRandomQuote` function to get a random quote from array of quotes
***/
function getRandomQuote(quotes){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  return quotes[randomNumber];
}


/***
 * `printQuote` function to print the quote to the page
***/

function printQuote(){
  let randomQuote = getRandomQuote(quotes);
  console.log(randomQuote);

  let output = `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}</p>`;

  document.querySelector('#quote-box').innerHTML= output;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
