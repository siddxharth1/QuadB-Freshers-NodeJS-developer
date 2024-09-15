async function fetchCryptoData() {
  try {
    const response = await fetch("http://localhost:3000/api/get-tickers");
    const data = await response.json();
    const tableBody = document.getElementById("crypto-data");

    data.forEach((ticker, i) => {
      const row = `
        <tr>
          <td>${i + 1}</td>
          <td>${ticker.name}</td>
          <td>${ticker.last}</td>
          <td>${ticker.buy}</td>
          <td>${ticker.sell}</td>
          <td>${ticker.volume}</td>
          <td>${ticker.base_unit}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching crypto data:", error);
  }
}

fetchCryptoData();
