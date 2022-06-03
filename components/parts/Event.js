import React from 'react'
import {
	Text,
	Box
} from '@chakra-ui/react'

const EventItem = (props) => {
	const {
		el
	} = props;

	const name = (el ? el.name : null)
	const inputs = (el ? el.inputs : null)
	const anon = (el ? el.anonymous : null)
	
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

export default EventItem