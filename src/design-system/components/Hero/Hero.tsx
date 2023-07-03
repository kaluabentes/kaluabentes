"use client"

import { ReactNode } from "react"
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
  footerSlot?: ReactNode
  isReversed?: boolean
  headingLevel?: number
  onButtonClick?: () => void
}

const Hero = ({
  headline,
  paragraph,
  buttonText,
  imageSrc,
  imageAlt,
  footerSlot,
  isReversed = false,
  headingLevel = 1,
  onButtonClick,
}: HeroProps) => (
  <Container>
    <ContentBox $isReversed={isReversed}>
      <ContentItem>
        <Heading level={headingLevel}>{headline}</Heading>
        <Paragraph variant="muted">{paragraph}</Paragraph>
        {onButtonClick && (
          <Button variant="primary" size="lg" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
        {footerSlot}
      </ContentItem>
      <Avatar src={imageSrc} alt={imageAlt} />
    </ContentBox>
  </Container>
)

export default Hero
