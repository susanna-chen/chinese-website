import React from 'react'
import Button from '../Button'
import ButtonS from '../Button/ButtonSecondary'
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from './InfoElements';


const InfoSection = ({ light, lightBg, imgStart, id, headline, description, buttonLabelP, buttonLabelS, img, alt, topLine, showBtn }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                {/* light => colore testo */}
                                <Heading light={light}>{headline}</Heading>
                                <Subtitle light={light}>{description}</Subtitle>
                                <BtnWrap showBtn={showBtn}>
                                    <Button to="/" label={buttonLabelP}></Button>
                                    <ButtonS to="/" label={buttonLabelS}></ButtonS>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
