import {
	useState
} from "react"

import {
	Box
} from '@chakra-ui/react'

import HeadMenu from '../components/HeadMenu'
import ContractABI from '../components/ContractABI'

import ABIs from '../abis'

export default function Home() {
	const [abi, setABI] = useState(ABIs[0]);

	return (
		<Box
			bg={'#0072F5'}
			color={'white'}

			w="100vw"
			h="100vh"
			overflow={'hidden'}
		>
			<HeadMenu
				value={abi} 
				setLink={setABI}
				
				links={ABIs}
			/>
			<ContractABI 
				abi={abi}	
			/>
		</Box>
	)
}
