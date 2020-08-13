import React from "react"
import { Flex, Text } from "rebass"
import Link from "./Link"
import { useColorMode } from 'theme-ui'
import theme from "./theme"

const Footer = props => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <Flex mt="auto" height="150px" sx={{
            backgroundImage: `url(http://localhost:3000/static/pattern.svg)`,
            flexDirection: "column"
        }}>
            <Text m="auto" mb="10px">Made with 💖 by the DVHackClub Team!</Text>
            <Link m="auto" mt="10px" href="https://github.com/neelr">View the Source Code</Link>
        </Flex >
    )
}

export default Footer;