import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type HeroBlockProps = {
  heading: string
  subheading: string
  image: Media
  ctaButton: {
    text: string
    link: string
  }
}

export default function HeroBlock(props: HeroBlockProps) {
  const { heading, subheading, image, ctaButton } = props
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <Link href={ctaButton.link} className="btn">
          {ctaButton.text}
        </Link>
      </div>
      <Image src={image.url!} alt={image.alt} width={300} height={300} className="hero-image" />
    </section>
  )
}
