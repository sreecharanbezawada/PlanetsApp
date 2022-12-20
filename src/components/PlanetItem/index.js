// Write your code here
import {
  PlanetItemContainer,
  ImagePlanet,
  NamePlanet,
  DescriptionPlanet,
} from './styledComponents'

const PlanetItem = props => {
  const {eachValue} = props
  return (
    <PlanetItemContainer>
      <ImagePlanet src={eachValue.imageUrl} alt={`planet ${eachValue.name}`} />
      <NamePlanet>{eachValue.name}</NamePlanet>
      <DescriptionPlanet>{eachValue.description}</DescriptionPlanet>
    </PlanetItemContainer>
  )
}

export default PlanetItem
