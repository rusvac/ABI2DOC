import React from 'react'
import {
  ChakraProvider,
  Box,
  List,
  ListItem,
  Grid,
  Stack,
  Icon,
  Text
} from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

import {
	RiFilePaper2Fill,
	RiPencilRuler2Fill
} from 'react-icons/ri'

import FunctionItem from './parts/Function'

const Constructor = (props) => (
	<Box
		bg={'whiteAlpha.100'}
		color={'white'}
		
		rounded="md"
		p={5}
	>
		<Stack spacing={2} isInline>
			<Text>Constructor</Text>
		</Stack>
	</Box>
)

const Info = (props) => (
	<Stack spacing={2}>
		<Icon
			as={RiFilePaper2Fill}
			boxSize={10}
		/>
		<Text
			fontSize="xl"	
		>{props.name}</Text>
	</Stack>
)

const FunctionsList = (props) => (
	<Box
		p={5}
	>
		<Text
			fontSize="lg"	
		>Functions</Text>
		<List>
			{props.items && props.items.map((el, i) => (
				<ListItem m={2} key={i}>
					<FunctionItem
						el={el}
					/>
				</ListItem>
			))}
		</List>
	</Box>
)

const EventsList = (props) => (
	<Box
		p={5}
	>
		<Text
			fontSize="lg"	
		>Events</Text>
		<List>
			{props.items && props.items.map((el, i) => (
				<ListItem m={2} key={i}>
					<FunctionItem
						el={el}
					/>
				</ListItem>
			))}
		</List>
	</Box>
)

const Overview = (props) => (
	<Box
		px={10}
	>
		<Grid
			templateColumns="repeat(2, 1fr)"
			gap={6}
			p={5}
		>
			<Info 
				name={props.name}
			/>
			
			<Constructor
				con={props.constructor}
			/>
		</Grid>
	</Box>
)

const ContractABI = (props) => {

	const myABI = props.abi;
	const name = myABI.name;
	const realABI = myABI.abi;
	
	const sConst = realABI
		.filter((el) => (el.type == "constructor"))
	const sEvents = realABI
		.filter((el) => (el.type == "event"))
	const sFuncs = realABI
		.filter((el) => (el.type == "function"))
	
	return(
		<Box
			width="100%" 
			height="100%"
			overflowY={'auto'}
		>
			<Overview 
				name={name}
				constructor={sConst}
			/>
			<Box m={10}>
			</Box>
			<Box
				pt={15}
				px={10}
				pb={10}
				bg={'gray.100'}
				color={'black'}
			>
			
				<Box
					mt={-10}
					py={2}
					px={7}
					roundedTop='xl'
					bg={'white'}
					borderBottomWidth={1}
					borderColor={'gray.300'}
				>
					<Text as="kbd">parsed contract abi</Text>
				</Box>
				<Box
					roundedBottom='xl'
					bg={'white'}
				>
				
					<FunctionsList 
						items={sFuncs}	
					/>
					
					<Box
						borderBottomWidth={1}
						borderColor={'gray.300'}
						p={1}
					>
					</Box>
			    
					<EventsList 
						items={sEvents}
					/>
		    
				</Box>
	    
			</Box>
			
		</Box>
	)
}

export default ContractABI