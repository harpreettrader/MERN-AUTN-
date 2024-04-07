import { Flex, Heading, Spacer, Link } from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            p="4"
            bg="gray.500"
            color="black"
            cursor={"pointer"}
            
        >
            <Heading as="h1" size="lg" >
               <Link href="/">Home</Link>
            </Heading>
            <Spacer />
            <Flex align="center">
                <Link mr="4" href="/login">
                    Login
                </Link>
                <Link href="/register">Register</Link>
            </Flex>
        </Flex>
    );
};

export default Header;
