function addTransaction() {
    const type = document.getElementById("type").value;
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
  
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${type}</td>
      <td>${name}</td>
      <td>${amount}</td>
      <td><button onclick="deleteTransaction(this)">Delete</button></td>
    `;
  
    document.getElementById("transactions").appendChild(newRow);  
    
  }
  