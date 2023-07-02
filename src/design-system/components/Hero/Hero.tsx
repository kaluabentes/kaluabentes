"use client"

import Avatar from "../Avatar"
import Button from "../Button"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import { Container, ContentBox, ContentItem } from "./Hero.styles"

interface HeroProps {
  headline: string
  paragraph: string
  buttonText: string
  imageSrc: string
  imageAlt: string
  isReversed?: boolean
  onButtonClick: () => void
}

const Hero = ({
  headline,
  paragraph,
  buttonText,
  imageSrc,
  imageAlt,
  isReversed = false,
  onButtonClick,
}: HeroProps) => (
  <Container>
    <ContentBox $isReversed={isReversed}>
      <ContentItem>
        <Heading level={1}>{headline}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <Button variant="primary" size="lg" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </ContentItem>
      <Avatar src={imageSrc} alt={imageAlt} />
    </ContentBox>
  </Container>
)

export default Hero
