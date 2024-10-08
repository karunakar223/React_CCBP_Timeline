import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ProjectTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0px;
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600px;
  line-height: 1.2;
  margin-left: 4px;
`

export const ProjectDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0px;
`
export const VisitLink = styled.a`
  text-align: center;
  color: #0967d2;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  margin-top: 5px;
`
