import styled from "styled-components";

export const CarContainer = styled.li`
width: 274px;
height: 426px;
list-style: none;
border-radius: 14px;
transition: box-shadow 250ms;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;;

}
`
export const CarImg = styled.img`
      border-radius: 14px;
      object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
`
export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
font-size: 16px;
  font-weight: 500;
  color: #121417;
  margin-bottom: 8px;
`

export const CarNameAccent = styled.span`
    color: #3470FF;
`

export const CarInfoList = styled.ul`
    display: flex;
  flex-wrap: wrap;
  color: #88898b;
`

export const CarInfoItem = styled.li`
    font-size: 12px;
  font-weight: 400;
  line-height: 1.25;
  padding-right: 6px;
  padding-left: 6px;
  &:not(:last-child) {
    border-right: 2px solid rgba(18, 20, 23, 0.1);
    
  }
`

export const NextCarInfoList = styled.ul`
     display: flex;
  flex-wrap: wrap;
  color: #88898b;
  margin-bottom: 24px;
`

export const LearnMoreBtn = styled.button`
    background: #3470FF;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    width: 274px;
    height: 44px;
    border: transparent;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &:hover{
        background: #0B44CD;
    }

`