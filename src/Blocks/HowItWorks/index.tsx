import React from 'react'

export type HowItWorksBlockProps = {
  sectionTitle?: string
  steps?: {
    title: string
    description: string
  }[]
}

export default function HowItWorksBlock(props: HowItWorksBlockProps) {
  const { sectionTitle, steps } = props
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>{sectionTitle || 'How It Works'}</h2>
        <div className="steps">
          {steps && steps.length > 0 ? (
            steps.map((step, index) => (
              <div className="step" key={index}>
                <h4>{`${index + 1}. ${step.title}`}</h4>
                <p>{step.description}</p>
              </div>
            ))
          ) : (
            <p>No steps available.</p>
          )}
        </div>
      </div>
    </section>
  )
}
