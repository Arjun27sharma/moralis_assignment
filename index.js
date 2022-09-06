const transfer = async () => {

    const receiver_address = document.getElementById("receiver_address").value

    await Moralis.enableWeb3()

    const options = {
      type: "erc721",
      receiver: receiver_address,
      contractAddress: receiver_address,
      tokenId: 1
    };

    await Moralis.transfer(options);
    alert("NFT Transferred sucessfully");
  };