// the more modern approach to calculations
//wrapping in DOM listener is purely defensive. Not necessary as I use defer
document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const btns = document.querySelectorAll("button");

  //Calc actions
  const calcFunc = {
    "=": () => {
      try {
        if(!display.value.trim()) { //checking if no value or only whitespace
          display.value = "Enter sum nums";
          return;
        }
        // grabs global x as opposed to just first 'x'
        display.value = eval(display.value.replace(/x/g, "*"));
      } catch (error) {
        display.value = `Oops, that wasn't suppose to happen`;
      }
    },
    C: () => {
      display.value = "";
    },
    default: (btnVal) => {
      const lastChar = display.value.slice(-1);
      const operators = ["+", "-", "x", "/"];

      if (
        (operators.includes(btnVal) && operators.includes(lastChar)) ||
        (btnVal === "." && display.value.includes("."))
      ) {
        return;
      }

      display.value += btnVal;
    },
  };

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      const btnVal = button.textContent;

      const action = calcFunc[btnVal] || calcFunc["default"];
      action(btnVal);
    });
  });
});


// quote api call
const quote = document.querySelector('#quote')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')

// wrapping all in event listener is not best practice
equals.addEventListener("click", () => {
  fetch("https://api.api-ninjas.com/v1/quotes", {
  headers: {'X-API-KEY': QUOTE_API_KEY }
})
.then((res) => {
  if(!res.ok) {  // using the .ok property to catch errors
    throw new Error(`HTTP error! Here's the status: ${res.status}`)
  }
  return res.json()
})
.then((data) => {
  if(data.length > 0) {
    const { quote: quoteText, author} = data[0]; //assumption that property1 of the api object "quote" is quote and prop2 is author
    /* option here for more secutiry  
    const quoteText = firstQuote?.quote || "Quote unavailable";
    const author = firstQuote?.author || "Unknown";*/
    quote.innerHTML = `${quoteText} <br> -${author}`;
  } else {
    quote.textContent = "We're ... at a loss for words. No quote found."
  }
})
.catch((error) => console.error(`There's an error`, error))
})

// emoji api call with more modern approach

const emoji = document.querySelector('#emoji')

async function getEmoji() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/emoji?group=smileys_emotion", {
      headers: {'X-API-KEY': QUOTE_API_KEY }
    });
    if(!response.ok) {
      throw new Error(`HTTP error! Here's the status: ${response.status}`)
    }

    const emojiData = await response.json();

    if(emojiData.length > 0) {
       // grabbing a random emoji from the 30 returned with each api category call
    const getRandomEmoji = emojiData[Math.floor(Math.random() * emojiData.length)]
    emoji.innerHTML = getRandomEmoji.character; // switch to .innerHTML to grab emoji 
    } else {
      emoji.textContent = "No emojis here :("
    }
   
  } catch (error) {
    console.error('Failed to fetch emoji:', error);
    emoji.textContent = 'No emoji...something is wrong.'
  }
}

clear.addEventListener('click', getEmoji)

