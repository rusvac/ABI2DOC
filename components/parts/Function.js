import React from 'react'
import {
	Text,
	Box
} from '@chakra-ui/react'

const FunctionItem = (props) => {
	const {
		el
	} = props;

	const name = (el ? el.name : null)
	const isConst = (el ? el.constant : null)
	
	const inputs = (el ? el.inputs : null)
	const outputs = (el ? el.outputs : null)
	
	const payable = (el ? el.payable : null)
	const mutability = (el ? el.stateMutability : null)
	
	
	return(
    	<Box
			border="1px solid black"
			rounded="md"
			p={2}
		>
			<Text>{name}</Text>
		</Box>
	)
}

export default FunctionItem