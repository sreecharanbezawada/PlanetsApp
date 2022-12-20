// Write your code here
// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {MainContainer, MainHeading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <MainContainer data-testid="planets">
      <MainHeading>PLANETS</MainHeading>
      <Slider>
        {planetsList.map(eachValue => (
          <PlanetItem key={eachValue.id} eachValue={eachValue} />
        ))}
      </Slider>
    </MainContainer>
  )
}

export default PlanetsSlider
