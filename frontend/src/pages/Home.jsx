import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import LoadingIndicator from "../components/ErrorIndicator"
import ErrorIndicator from "../components/ErrorIndicator"
import { Container, Flex, SimpleGrid, Select, Button } from "@chakra-ui/react"
import { ProductsCard } from "../components/ProductsCard"


export default function Home(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sortByPrice, setSortyPrice] = useState("")
    const [filterByCategory, setFilterByCategory] = useState("")
    const [products, setProducts] = useState([])

    async function fetchAndUpdateData(){
        setLoading(true)
        try {
            let res = await axios({
                method: "get",
                url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",

            })
            let data = res?.data?.data
            setLoading(false)
            setProducts(data)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(()=>{
        fetchAndUpdateData()
    }, [])

    if(loading){
        return(<LoadingIndicator />)
    }

    if(error){
        return(<ErrorIndicator />)
    }

    return(
        <Container>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
                {products?.map((product)=>(
                    <ProductsCard {...product} key={product.id} />
                ))}
            </SimpleGrid>
        </Container>
    )
}