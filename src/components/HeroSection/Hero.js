import React from 'react'
import {Section, Content, Left, Title, Desc, Button} from './HeroComponents'
import {MdKeyboardArrowRight} from 'react-icons/md'
const Hero = () => {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>Get 2 FREE Stocks <br /> value up to $1850</Title>
                        <Desc>Open and found a brokeshop account width $100 or more you will have a chance of claiming sotcks like <span>GOODG, FB</span>{' '} and more!</Desc>
                        <Button href = "https://bit.ly/webull-join" target = "_blank"><span>Claim your free stocks now</span> <MdKeyboardArrowRight /></Button>
                </Left>
            </Content>
        </Section>
    )
}

export default Hero
