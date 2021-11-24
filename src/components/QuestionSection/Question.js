import React from 'react'
import { Section, Title, Container,Title1, Desc } from './QuestionComponents'
const Question = () => {
    return (
        <>
              <Section>
                <Title>Frequently asked questions</Title>
                <Container>
                    <Title1>Can I sell my free stock?</Title1>
                    <Desc>Yes. Once the free stock has settled into your account, you can sell it. From there, you can invest the proceeds from the sale into other stocks or withdraw the funds.</Desc>
                </Container>
                <Container>
                    <Title1>I made my first deposit. Where's my free stock?</Title1>
                    <Desc>You can claim free stock(s) after your deposit settles. Free stocks arrive 10-15 business days after your deposit has cleared.
                            Most clients deposit via ACH, which takes 5 business days for the funds to settle. Clients who deposit via wire can expect their funds to settle within 1-2 business days. If your initial deposit is made via a brokerage (stock) transfer, please allow 7-9 business days for your funds to settle.</Desc>
                </Container>
                <Container>
                    <Title1>Free Stock Value</Title1>
                    <Desc>Account Opening Bonus: $3-$300-Initial Deposit for Free Stock Promotion: $8-$2000-Referral Bonus Promotion: $3-$300</Desc>
                </Container>
                <Container>
                    <Title1>About Free Stock Allocation Rules</Title1>
                    <Desc>1) The program stock inventory is composed of stocks with a minimum market capitalization of $2.5 billion from a US-based company and listed on NYSE or NASDAQ.<br />
                            2) Participants have 30 days to claim their free stock. Otherwise, the free stock offer will expire. Customers may receive different value/number of free stocks for different promotions.</Desc>
                </Container>
                <Container>
                    <Title1>Can I get my expired free stocks?</Title1>
                    <Desc>If you participated in a promotion, your free stocks will be delivered to your FREE STOCK tab. You HAVE to claim the free stock(s) from that tab within 30 days. Otherwise, any expired stocks left unclaimed will be returned to Webull and we will not reissue these stocks.</Desc>
                </Container>
              </Section>
              <hr />
        </>
    )
}

export default Question
