// change this each time you deploy a new contract
var contractAddress = "0x6d5a8F17a0Bf3C29B2BC5067EdF0E977CE652738";

// paste contract ABI here
var contractABI = [
	
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_num",
					"type": "uint256"
				}
			],
			"name": "setNum",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getNum",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "num",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	
]