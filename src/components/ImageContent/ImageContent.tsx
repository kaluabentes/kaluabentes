"use client"

import { ReactNode } from "react"

import {
  ButtonBox,
  Container,
  ContentBox,
  ContentSide,
  Image,
} from "./ImageContent.styles"
import Button from "../Button"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

interface ImageContentProps {
  id?: string
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt: string
  content: ReactNode
}

const ImageContent = ({
  id,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  content,
}: ImageContentProps) => (
  <Container id={id}>
    <Heading level={2}>{title}</Heading>
    <ContentBox>
      <Image src={imageSrc} alt={imageAlt} />
      <ContentSide>
        <Heading level={3}>{subtitle}</Heading>
        <Paragraph variant="muted">{content}</Paragraph>
        <ButtonBox>
          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/kalua-bentes/", "_blank")
            }
          >
            Linkedin
          </Button>
          <Button
            onClick={() =>
              window.open("https://github.com/kaluabentes", "_blank")
            }
          >
            GitHub
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/kaluabentes/kaluabentes",
                "_blank"
              )
            }
          >
            Source Code
          </Button>
        </ButtonBox>
      </ContentSide>
    </ContentBox>
  </Container>
)

export default ImageContent
