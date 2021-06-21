import styled from 'styled-components';

export const AlbumWarpper = styled.div`
  width: ${props => props.width}px;

  .album-image {
    position: relative;
    margin-top: 15px;
    overflow: hidden;
    
    img {
      width: ${props => props.size}px;
      height: ${props => props.size}px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp}px;
      text-indent: -9999px;
    }
  }

  .album-info {
    width: ${props => props.size}px;
    .name {
      color: #000;
    }
    .artist {
      color: #666;
    }
  }
  

`