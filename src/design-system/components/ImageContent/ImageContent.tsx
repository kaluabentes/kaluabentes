"use client"

import { ReactNode } from "react"

import {
  Container,
  ContentBox,
  ContentSide,
  Image,
} from "./ImageContent.styles"
import Heading from "../Heading"

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
