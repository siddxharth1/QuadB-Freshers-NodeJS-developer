const axios = require("axios");
const prisma = require("../database");

const fetchAndStoreTickers = async () => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = Object.values(response.data).slice(0, 10);

    await prisma.ticker.deleteMany();

    for (const ticker of tickers) {
      const { name, last, buy, sell, volume, base_unit } = ticker;
      await prisma.ticker.create({
        data: {
          name,
          last: parseFloat(last),
          buy: parseFloat(buy),
          sell: parseFloat(sell),
          volume: parseFloat(volume),
          base_unit,
        },
      });
    }
  } catch (error) {
    console.error("Error fetching or storing data:", error);
    throw new Error("Failed to fetch and store data.");
  }
};

const getStoredTickers = async (req, res) => {
  try {
    await fetchAndStoreTickers();

    const tickers = await prisma.ticker.findMany();
    res.json(tickers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving data.");
  }
};

module.exports = {
  fetchAndStoreTickers,
  getStoredTickers,
};
