
function getRandomName(event) {
    // Get the list of names from the input field
    const namesInput = document.getElementById("names");
    const namesList = namesInput.value.split(",").map(name => name.trim());

    const isValid = validateNamesList(namesList);
    if (!isValid) {
      return; // Exit the function if validation fails
    }
  
    // Check if there are any names in the list
    if (!namesList.length) {
      alert("Please enter at least one name in the list!");
      return;
    }
  
  
    // Generate a random number between 0 and the length of the list
    const randomIndex = Math.floor(Math.random() * namesList.length);
  
    // Get the random name from the list
    const randomName = namesList[randomIndex];
  
    // Display the random name
    document.getElementById("random-name").textContent = randomName;

    
      event.innerHTML="Here is the Winner!!"

    
  }

  function validateNamesList(namesList) {
    const validChars = /^[A-Za-z ]+$/; // Accept A-Z a-z and spaces
    for (const name of namesList) {
      if (!validChars.test(name)) {
        alert("Please use only letters A-Z and commas in the names list.");
        return false; // Validation failed
      }
    }
  
    return true; // Validation passed
  }
  