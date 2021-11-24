import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink , SocialMediaWrap, SocialMedia, WebsiteRights, SocialIcons, SocialIconLink, Desc} from './footerComponents'
const Footer = () => {
   
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>FAQ</FooterLinkTitle>
                                <FooterLink to = "/">Free Schedule</FooterLink>
                                <FooterLink to = "/">Account</FooterLink>
                                <FooterLink to = "/">Margin Trading</FooterLink>
                                <FooterLink to = "/">How to File an Inquiry</FooterLink>
                                <FooterLink to = "/">Customer Relationship Summary</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Werbull</FooterLinkTitle>
                                <FooterLink to = "/">Our Story</FooterLink>
                                <FooterLink to = "/">Careers</FooterLink>
                                <FooterLink to = "/">Blog</FooterLink>
                                <FooterLink to = "/">BrokerCheck</FooterLink>
                                <FooterLink to = "/">Our Execution Quality</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Terms & Conditions</FooterLinkTitle>
                                <FooterLink to = "/">Privacy Policy</FooterLink>
                                <FooterLink to = "/">Business Continuity Plan</FooterLink>
                                <FooterLink to = "/">Disclosures</FooterLink>
                                <FooterLink to = "/">Data Disclaimer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to = "/">customerservices@webull.us</FooterLink>
                                <FooterLink to = "/">+1 (888) 828-0618</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href = "//www.facebook.com" target = "_blank" aria-label = "Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href = "//www.instagram.com" target = "_blank" aria-label = "Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href = "//www.twitter.com" target = "_blank" aria-label = "Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                    <hr />
                    <Desc>Securities trading is offered to self-directed customers by Webull Financial LLC, a broker dealer registered with the Securities and Exchange Commission (SEC). Webull Financial LLC is a member of the Financial Industry Regulatory Authority (FINRA), Securities Investor Protection Corporation (SIPC), The New York Stock Exchange (NYSE), NASDAQ and Cboe EDGX Exchange, Inc (CBOE EDGX).
                            Webull Financial LLC is a member of SIPC, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at www.sipc.org.
                            Our clearing firm Apex Clearing Corp has purchased an additional insurance policy. The coverage limits provide protection for securities and cash up to an aggregate of $150 million, subject to maximum limits of $37.5 million for any one customer’s securities and $900,000 for any one customer’s cash. Similar to SIPC protection, this additional insurance does not protect against a loss in the market value of securities.
                            Cryptocurrency execution and custody services are provided by Apex Crypto LLC (NMLS ID 1828849) through a software licensing agreement between Apex Crypto LLC and Webull Crypto LLC. Cryptocurrency trading is offered through an account with Apex Crypto. Apex Crypto is not a registered broker-dealer or FINRA member and your cryptocurrency holdings are not FDIC or SIPC insured. Please ensure that you fully understand the risks involved before trading.
                            All investments involve risks and is not suitable for every investor. The value of securities may fluctuate and as a result, clients may lose more than their original investment. The past performance of a security, or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities, or other financial products. Investors should consider their investment objectives and risks carefully before investing.
                            Options trading entails significant risk and is not appropriate for all investors. Option investors can rapidly lose the value of their investment in a short period of time and incur permanent loss by expiration date. Losses can potentially exceed the initial required deposit. You need to complete an options trading application and get approval on eligible accounts. Please read the Characteristics and Risks of Standardized Options before trading options.
                            No content on the Webull Financial LLC website shall be considered as a recommendation or solicitation for the purchase or sale of securities, options or other investment products. All information and data on the website is for reference only and no historical data shall be considered as the basis for judging future trends.
                            Investors should be aware that system response, execution price, speed, liquidity, market data, and account access times are affected by many factors, including market volatility, size and type of order, market conditions, system performance, and other factors.
                            Free trading of stocks, ETFs and options refers to $0 commissions for Webull Financial LLC self-directed individual cash or margin brokerage accounts and IRAs that trade U.S. listed securities via mobile devices, desktop or website products. Relevant regulatory and exchange fees may apply. Please refer to our Fee Schedule for more details.</Desc>
                            <hr />
                    <WebsiteRights>© 2021 Webull Financial LLC, All rights reserved. Member <b>FINRA/SIPC/NYSE/NASDAQ/CBOE EDGX</b> </WebsiteRights>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer