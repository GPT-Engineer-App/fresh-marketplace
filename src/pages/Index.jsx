import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Input, InputGroup, InputRightElement, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaAppleAlt, FaCarrot, FaFish } from "react-icons/fa";

const products = [
  { id: 1, name: "Fresh Apples", price: "$3.99/kg", icon: FaAppleAlt, img: "https://images.unsplash.com/photo-1671182414029-64bc5dd0e965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGFwcGxlc3xlbnwwfHx8fDE3MTU5MzA3NDh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Organic Carrots", price: "$2.49/kg", icon: FaCarrot, img: "https://images.unsplash.com/photo-1533478583204-680d4ff74891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY2Fycm90c3xlbnwwfHx8fDE3MTU5MzA3NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Fresh Fish", price: "$10.99/kg", icon: FaFish, img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZpc2h8ZW58MHx8fHwxNzE1OTMwNzUxfDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Heading size="lg">Farm Fresh Market</Heading>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
        </HStack>

        <InputGroup size="md">
          <Input placeholder="Search for products..." />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>

        <VStack spacing={4} w="full">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
              <HStack spacing={4} p={4}>
                <Image boxSize="100px" objectFit="cover" src={product.img} alt={product.name} />
                <VStack align="start">
                  <HStack>
                    <product.icon />
                    <Text fontSize="xl" fontWeight="bold">
                      {product.name}
                    </Text>
                  </HStack>
                  <Text>{product.price}</Text>
                  <Button colorScheme="teal">Add to Cart</Button>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
