import React from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useInView } from "react-intersection-observer"

export const Home = () => {
  const containerStyle = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url("/bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
  `

  const teststyles = css`
    font-size: 18px;
    color: red;
    opacity: 0;
    transform: translateY(-10px);
  `

  const fadeIn = keyframes`
    0% {
        opacity: 0;
    },
    100% {
        opacity: 1
    }
  `

  const animation = css`
    animation: ${fadeIn} 3s ease-out both;
  `

  const [ref, inView] = useInView({
    threshold: 0,
  })

  return <div ref={ref} css={[containerStyle, inView && animation]}></div>
}
