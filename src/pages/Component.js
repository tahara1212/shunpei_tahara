import React from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useInView } from "react-intersection-observer"

const text = css`
  color: hotpink;
  font-size: 20px;
  opacity: 0;
  transform: translateY(-10px);
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px);
    },
  100% {
    opacity: 1
    transform: translateY(0);
  }
`

const animation = css`
  animation: ${fadeIn} 2s ease-out both;
`

export const Component = () => {
  const [ref, inView] = useInView({
    rootMargin: "10px",
    threshold: 0,
  })
  console.log(inView)

  return (
    <>
      {inView && <p css={animation}>test</p>}
      <p ref={ref} css={[text, animation]}>
        animation
      </p>
    </>
  )
}
