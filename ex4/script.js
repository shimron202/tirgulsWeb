const apiUrl = "https://api.mtw-testnet.com/assets/all";

function createTable(data) {
  var table = document.querySelector(".cryptoTable");

  // Iterate through each item in the data array
  for (const [currencyName, currencyData] of Object.entries(data)) 
  {
    var newRow = table.insertRow(-1); // insert row to the last location
    newRow.style.border = '1px solid #ddd';
    var cell1 = newRow.insertCell(-1);
    var cell2 = newRow.insertCell(-1);
    var cell3 = newRow.insertCell(-1);
    var cell4 = newRow.insertCell(-1);
    
    var img = document.createElement('img');
    img.src = currencyData.image
    cell1.appendChild(img)
    cell2.innerHTML = currencyName;
    cell3.style.color = 'blue';
    cell3.style.fontWeight = 'bold';
    cell3.innerHTML= currencyData.name;
    cell4.innerHTML = currencyData.summary
  }
}

// Using the fetch function to make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => 
    {
        console.log(data)
        createTable(data)
    })
  .catch(error => {
    console.error('Fetch error:', error);
  });
