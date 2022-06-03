import ERC20ABI from './json/ERC20ABI'
import ERC721ABI from './json/ERC721ABI'

import MintABI from './json/MintABI'
import ReserveABI from './json/ReserveABI'

import WMATICABI from './json/WMATIC'


import BatteryABI from './json/ABI_Battery'
import ChargerABI from './json/ABI_Charger'

const ABIs = [
	{
		"name" : "ERC20",
		"abi": ERC20ABI
	},
	{
		"name" : "ERC721",
		"abi": ERC721ABI
	},
	{
		"name" : "ImaginaryMint",
		"abi": MintABI
	},
	{
		"name" : "ImaginaryReserve",
		"abi": ReserveABI
	},
	{
		"name" : "Mumbai WMATIC",
		"abi": WMATICABI
	},
	{
		"name" : "Battery",
		"abi": BatteryABI
	},
	{
		"name" : "Charger",
		"abi": ChargerABI
	},
]
export default ABIs

/*
{
		"name" : "ImaginaryMint",
		"abi": MintABI
	},
*/