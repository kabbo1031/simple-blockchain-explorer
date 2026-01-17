document.getElementById("loadBtn").addEventListener("click", async function () {
    log("Loading blockchain data");

    const data = await loadBlockData();
    updateUI(data);
});
