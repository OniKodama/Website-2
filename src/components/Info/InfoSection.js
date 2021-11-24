import React from 'react'
import {Section, Title, Container, Title1, Desc,Column1, Column2, DescBot, DescBot1} from './InfoSectionComponents'

const InfoSection = () => {
    return (
        <>
            <Section>
                <Title>Why Webull?</Title>
                <Column1>
                    <Container>
                        <Title1>Pay zero commission fees.</Title1>
                        <Desc>Pay $0 commissions on online stocks, ETFs, and options trades, plus $0 per options contract.</Desc>
                    </Container>
                    <Container>
                        <Title1>Buy or sell cryptos.</Title1>
                        <Desc>Buy or sell Bitcoin, Dogecoin, Ethereum, Litecoin, and more with Webull Crypto at $1 minimum.</Desc>
                    </Container>
                </Column1>
                
                <Column2>
                    <Container>
                        <Title1>Own fractional shares.</Title1>
                     <Desc>You can invest in your favorite companies and ETFs with as little as $5!</Desc>
                    </Container>
                
                    <Container>
                        <Title1>Access real-time market data.</Title1>
                        <Desc>Complimentary real-time data, customizable charts, and indicators.</Desc>
                    </Container>
                 </Column2>
                 <DescBot>There is a minimum of 0.00001 shares per order and a purchase quantity of $5 to own a portion of the stock or ETF. This is not an offer or solicitation of any offer to buy or sell any security, investment, or other product. There are unique features and risks associated with fractional shares, and there is always the potential of losing money when you invest in securities. Past performance, historical returns, future protections, and statistical forecasts are not guarantee of future returns or future performance. Diversification does not ensure a profit or guarantee against loss. Investors should consider their investment objectives and risks carefully before investing. Fractional shares are not transferable. For a complete explanation of conditions, restrictions and limitations associated with fractional shares, see our Customer Agreement related to fractional shares.</DescBot>
                 <DescBot1>Crypto trading on Webull platforms is served by Webull Crypto LLC and offered through APEX Crypto. Cryptocurrency execution and custody services are provided by Apex Crypto LLC (NMLS ID 1828849) through a software licensing agreement between Apex Crypto LLC and Webull Crypto LLC. The trading of cryptocurrencies can result in substantial losses. Investors must evaluate particular financial circumstances to determine whether or not trading cryptocurrencies is appropriate for them. Crypto trading is not yet available for New York state residents.</DescBot1>
            </Section> 
        </>
    )
}

export default InfoSection
