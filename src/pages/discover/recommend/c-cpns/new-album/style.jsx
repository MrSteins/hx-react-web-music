import styled from 'styled-components';

export const NewAlbumWarpper = styled.div`
  .content {
    display: flex;
    align-items: center;
    height: 186px;
    margin: 30px 0;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    
    .center {
      width: 100%;
      padding: 0 20px;
    }

    .item {
      display: flex !important;
      justify-content: space-between;
      margin-left: 1px;
    }
  }



  .ant-carousel .slick-prev,
.ant-carousel .slick-next,
.ant-carousel .slick-prev:hover,
.ant-carousel .slick-next:hover {
  font-size: inherit;
  color: red;
}
` 