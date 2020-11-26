import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
    DetailsContainer,
    DetailsWrap,
    Stats,
    Info,
    Platforms,
    Media,
    Description,
    Img
} from './styles'

import { resizeImg } from '../../utils'

const GameDetails = () => {
    const { game, screen, loading } = useSelector(state => state.details)

    const history = useHistory()

    const exitDetailHandler = e => {
        if (e.target.classList.contains('details')) {
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    return ( 
        <>
            {!loading &&
            (
            <DetailsContainer className='details' onClick={exitDetailHandler}>
                <DetailsWrap>
                    <Stats>
                        <div>
                            <h3>{game.name}</h3>
                            <p>Rating: {game.rating}</p>
                        </div>
    
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data => (
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
    
                    <Media>
                        <Img src={resizeImg(game.background_image, 1280)} alt={game.name} />
                    </Media>
    
                    <Description>
                        <p>{game.description}</p>
                    </Description>
    
                    <div>
                        {screen.results.map(screen => (
                            <Img key={screen.id} src={resizeImg(screen.image, 1280)} alt={`${game.name}-${screen.id}`} />
                        ))}
                    </div>
                </DetailsWrap>
            </DetailsContainer>  
            )}
        </>
     );
}
 
export default GameDetails;