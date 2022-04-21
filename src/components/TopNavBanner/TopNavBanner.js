import React from 'react';
import styled from 'styled-components';
const TopNavBanner = ({image , onClickHandler, alt}) => {
        const TopNavBanner = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        z-index: 1;
        
        `
    return (
        <TopNavBanner src={image} alt={alt} onClick={onClickHandler} />
            
    );
};

export default TopNavBanner;