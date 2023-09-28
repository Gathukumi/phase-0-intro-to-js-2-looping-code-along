function writeCards(namesArray) {
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(startingNumber) {
    if (startingNumber < 0) {
      return; 
    }
    
    console.log(startingNumber);
    countDown(startingNumber - 1); 
  }
  