import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaReddit, FaLinkedin, FaTwitter} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksWrapper, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLinks} from './FooterElements';


const index = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        
        <>
           <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="">How it works</FooterLink>
                                    <FooterLink to="">FAQ</FooterLink>
                                    <FooterLink to="">Terms of service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                    <FooterLink to="">Contact</FooterLink>
                                    <FooterLink to="">Support</FooterLink>
                                    <FooterLink to="">Collaboration</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/"  onClick={toggleHome}>
                                Logo
                            </SocialLogo>
                            <WebsiteRights> Logo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLinks href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Reddit"><FaReddit /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLinks>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>

        </>
    )
}

export default index
