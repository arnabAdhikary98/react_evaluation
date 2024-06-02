import { Navigate } from "react-router-dom"
import axios from "axios"
import {Container,
    Heading,
    Input,
    Button,
    VStack
 } from "@chakra-ui/react"
import { useContext, useState} from "react"
import { AuthContext } from "../context/AuthContext"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") //password = password

    const {login, authDetails: {isAuthenticated}} = useContext(AuthContext)

    async function handleClick(){
        try {
            let res = await axios({
                method: "post",
                url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
                data: {
                    email,
                    password
                }
            })
            login(res?.data?.token)

        } catch (error) {
            console.log(error)
        }
    }

    if(isAuthenticated){
        return <Navigate to="/" />
    }

    return(
        <Container maxW="md">
            <VStack spacing={7} >
                <Heading as="h1" size="xl"> Login </Heading>

                <Input placeholder="email" type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} />
                <Input placeholder="password" type="password" value={password} onChange={(e)=>(setPassword(e.target.value))}/>

                <Button variant="solid" colorScheme="blue" onClick={handleClick} >LOGIN</Button>
            </VStack>
        </Container>
    )
}