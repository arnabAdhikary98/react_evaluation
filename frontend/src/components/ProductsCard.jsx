import { Image,
    Card, 
    CardHeader, 
    CardBody,
    CardFooter,
    Text,
    Stack,
    StackDivider,
    Heading, 
    Button,
    Divider,
    ButtonGroup
 } from "@chakra-ui/react";
 import { useNavigate } from "react-router-dom";

 export function ProductsCard({ id, title, image, brand, category, price}){
    const navigate = useNavigate()

    return(
        <Card maxW='200px' >
        <CardBody>
            <Image
            src= {image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='5'>
            <Heading size='md'> {title} </Heading>
            <Text>
                {category}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                {price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    )

 }