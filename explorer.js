async function loadBlockData() {
    const provider = getProvider();

    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);

    return {
        blockNumber: blockNumber,
        txCount: block.transactions.length,
        network: (await provider.getNetwork()).name
    };
}
