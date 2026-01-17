function updateUI(data) {
    document.getElementById("blockNumber").innerText = data.blockNumber;
    document.getElementById("txCount").innerText = data.txCount;
    document.getElementById("network").innerText = data.network;
}
