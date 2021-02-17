import React from 'react';
import {ServiceContainer, ServiceWrapper, TextWrapper, BottomLine, Heading, Subtitle} from './ServicesElements';
import ServiceCard from '../Card';
import useFetch from '../../hooks/useFetch';



const Services = ( {headline, description, id} ) => {
    const { data: posts, isPending, error} = useFetch(`http://localhost:8000/${id}`);
    return (
        <>
            <ServiceContainer id={id}>
                <ServiceWrapper>
                    <TextWrapper>
                        <Heading>{headline}</Heading>
                        <BottomLine />
                        <Subtitle>{description}</Subtitle>
                    </TextWrapper >
                    { error&& <div>{ error }</div>}
                    { isPending && <h3>Loading...</h3> }
                    {posts && <ServiceCard posts={posts} service={id} />}
                </ServiceWrapper>
            </ServiceContainer>
        </>
    )
}

export default Services
