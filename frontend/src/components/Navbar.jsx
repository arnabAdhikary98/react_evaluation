import { useContext } from "react";
import { Link as ReactRouterLink} from "react-router-dom";
import { Flex, Link as ChakraLink, Button } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";

const links = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/login",
        label: "Login"
    }
]

export default function Navbar(){
    const { logout } = useContext(AuthContext)
    return(
        <Flex
        p="3"
        background="blue.200"
        justify="space-between"
        align="center"
        >
            {links?.map((link)=>(
                <ChakraLink
                as={ReactRouterLink}
                key={link.to}
                to={link.to}>
                    {link.label}
                </ChakraLink>
            ))}

            <Button variant="solid" color="red" onClick={logout} >Logout</Button>
        </Flex>
    )
}