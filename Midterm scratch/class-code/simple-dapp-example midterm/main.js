// MetaMask is our 'provider' in this case
const provider = new ethers.providers.Web3Provider(window.ethereum);
 
// You (whoever is signed into MetaMask) is the 'signer'
const signer = provider.getSigner();
 
// the 'contract' object allows us to call functions from our smart contract
const contract = new ethers.Contract(contractAddress, contractABI, provider);
 
// the 'contractWithSigner' object allows us to call smart contract functions that
// require us to send a transaction (like changing a number on the blockchain)
const contractWithSigner = contract.connect(signer);
 
async function init() {
 await provider.send("eth_requestAccounts", []);
}
 
init();
 
// EVENT LISTENERS
 
// when I click on the setText button...
$('#submit').click(function(){
 destroyedPhrase();
})
 
// when I click on the getText Button
// when I click on getText, it should allow user to upload their phrase to the website and display on the website.
// $('#getText').click(function(){
//  getText();
// })
 
// checks the blockchain for the current number every 2 seconds
// so that the page can be updated automatically if the number
// is changed.
setInterval(function(){
 listDestroyedItems();
}, 5000)
 
// FUNCTIONS
 
// CHANGING THE BLOCKCHAIN
 
async function listDestroyedItems() {
 
  $('.destroyed').empty();
  const phraseList = await contract.getPhrases();


  console.log(phraseList);

  const listLength = phraseList.length;

  console.log(listLength)

  for(let i = 0; i < listLength; i++) {

    const item = phraseList[i];

    const itemToDisplay = `<p class="destroyed">${item}</p>`
    $('#destroyedItems').append(itemToDisplay);

  }
  console.log("test")
}
 
// READING FROM THE BLOCKCHAIN
 
function destroyedPhrase() {
 // grab the user input from the input text box
 const textToSet = $('#textInput').val();
 
 // pass the converted text to number in the contract
 contractWithSigner.destroyedPhrase(textToSet);
}