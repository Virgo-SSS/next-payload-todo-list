import React from 'react'

export type FeaturesBlockProps = {
  sectionTitle?: string
  features?: {
    title: string
    description: string
    icon: string
  }[]
}

export default function FeaturesBlock(props: FeaturesBlockProps) {
  const { sectionTitle, features } = props

  return (
    <section className="features">
      <div className="container">
        <h2>{sectionTitle || 'Why Choose Us?'}</h2>
        <div className="feature-grid">
          {features && features.length > 0 ? (
            features.map((feature, index) => (
              <div className="feature" key={index}>
                <h3>
                  {feature.icon} {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            ))
          ) : (
            <p>No features available.</p>
          )}
        </div>
      </div>
    </section>
  )
}
