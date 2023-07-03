import { ReactNode } from "react"

import Heading from "../Heading"

import {
  Container,
  ContentBox,
  ContentSide,
  Image,
} from "./ImageContent.styles"

interface ImageContentProps {
  title: string
  imageSrc: string
  imageAlt: string
  content: ReactNode
}

const ImageContent = ({
  title,
  imageSrc,
  imageAlt,
  content,
}: ImageContentProps) => (
  <Container>
    <Heading level={2}>{title}</Heading>
    <ContentBox>
      <Image src={imageSrc} alt={imageAlt} />
      <ContentSide>{content}</ContentSide>
    </ContentBox>
  </Container>
)

export default ImageContent
