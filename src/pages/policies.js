import React from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}


export const textContainer = css`
    margin-left: auto;
    margin-right: auto;
    width: 95%;
`

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 10em;

`
const IndexPage = ({ data }) => (
  <Wrapper>
    <div css={textContainer}>
      <h2>What is RPE?</h2>
    </div>
    <div css={textContainer}>
      <p>In the traditional sense, RPE stands for “Rate of Perceived Exhaustion” - a scale used by weightlifters all over the world to determine how difficult their lifts feel. In a business sense, RPE is Raw Power Endurance - a budding media company whose mission statement focuses on uplifting strength sports in Oceania.</p>
    </div>
    <div css={textContainer}>
      <h2>What’s in Store for RPE?</h2>
    </div>
    <div css={textContainer}>
      <p>We want to bring attention and shed some positive light onto strength sports in New Zealand and the wider Oceanic circle. We plan to do this by creating lifting centred content from blogging, videos, photography and maybe even a podcast in the future. Strength sports, in our opinion, are terribly under represented - especially in New Zealand. We want to show everyone just how amazing our little community is!</p>
    </div>
    <div css={textContainer}>
      <h2>What’s in your kit?</h2>
    </div>
    <div css={textContainer}>
      <p>Our photography gear breakdown includes - Canon 1300D camera body, Canon Ef 50mm lens, Canon Ef-S 18-55mm lens, Canon Ef-S 10-18mm wide angle lens, Canon Ef 75-300mm telephoto and various tripods.
Current video camera is a Panasonic HCV180 which shoots at 1080p 60fps. We are looking to upgrade to a full professional kit in the very near future.</p>
    </div>
    <div css={textContainer}>
      <h2>What will I get in my package?</h2>
    </div>
    <div css={textContainer}>
      <p>There are two video packages available. You can choose to receive your three best lifts in the “3 Lift” package or all of your attempts in the “9 Lift” package. For the three lift package, you dictate which lifts you would like to receive - please email us at rpendurance@gmail.com with your preferences after the competition. The videos will be sent as one folder with seperate files for each lift. Videos will include your walk on and set up. No fancy angles, watermarks or camera tricks, just your lifts to do as you please with. Great footage for analysis! Feel free to post them on your socials and to tag us too @rpendurance</p>
    </div>
    <div css={textContainer}>
      <h2>How Will I Receive My Files?</h2>
    </div>
    <div css={textContainer}>
      <p>You will be given a Drop Box download link.</p>
    </div>
    <div css={textContainer}>
      <h2>How Long Will it Take to Receive My Videos?</h2>
    </div>
    <div css={textContainer}>
      <p>Depending on the number of orders from NZPL Nationals 2020, it may take up to 1-2 weeks to receive your footage. First come, first served. We may contact you if we are unable to locate you in our videos by name for a photo reference. Please provide accurate information at checkout to make finding your footage on our hard-drives easier, thank you.</p>
    </div>
    <div css={textContainer}>
      <h2>I became sick/injured/couldn’t compete, can I get a refund?</h2>
    </div>
    <div css={textContainer}>
      <p>Yes, of course! Please email rpendurance@gmail.com to arrange a full refund.</p>
    </div>
    <div css={textContainer}>
      <h2>I changed my mind, can I get a refund?</h2>
    </div>
    <div css={textContainer}>
      <p>If you change your mind up to 12hrs before you’re due to compete, then yes, please email rpendurance@gmail.com to arrange a full refund. Change of mind right before you’re due to compete and you’ll be eligible for a partial 50% refund due to labour and administration overheads. If there are any issues please email rpendurance@gmail.com.</p>
    </div>
    <div css={textContainer}>
      <h2>Where Will My Money Go?</h2>
    </div>
    <div css={textContainer}>
      <p>Great question! We plan on purchasing the best quality camera gear to improve the video package experience for our lifters. By purchasing one of our start up packages, you’re supporting the growth of a small New Zealand business and making it possible for us to document and share New Zealand strength sports with the world! As our camera gear improves, so will your cinematic experience for meets to come!</p>
    </div>

    
    
   
  </Wrapper>
)

export const query = graphql`
query PolicyQuery {
  allShopifyPage(filter: {id: {glob: "Shopify__Page__Z2lkOi8vc2hvcGlmeS9QYWdlLzUyMjIwMjMxNzU0"}}) {
    edges {
      node {
        body
        id
      }
    }
  }
}
`

export default IndexPage
