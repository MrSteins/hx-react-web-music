import styled from 'styled-components'
import hot from '@/assets/img/sprite_01.png';

export const HeaderWarpper = styled.div`
	height: 75px;
	font-size: 14px;
	background-color: #242424;

	.content {
		display: flex;
		height: 70px;
		justify-content: space-between;
	}

	.divider {
		height: 5px;
		background-color: #c20c0c;
	}
`

export const LeftWarpper = styled.div`
	display: flex;
	.logo {
		width: 176px;
		background-position: 0 0;
		a {
			display: block;
			height: 100%;
			width: 100%;
			text-indent: -9999px;
		}
	}

	ul {
		display: flex;
		li {
			a {
				display: block;
				height: 100%;
				padding: 0 20px;
				line-height: 70px;
				color: #ccc;
				&:hover {
          color:#fff;
					background-color: #000;
				}
			}
			:last-of-type a {
				position: relative;
				::after {
					position: absolute;
					content: '';
					width: 28px;
					height: 19px;
					background-image: url(${hot});
					background-position: -190px 0;
					top: 20px;
					right: -15px;
				}
			}
			.active {
        position: relative;
        color: #fff;
				background-color: #000;
        .icon {
          position: absolute;
          bottom: -1px;
          left: 50%;
          display: block;
          width: 12px;
          height: 7px;
          transform: translate(-50%);
          background-position: -225px 0;

        }
			}
		}
	}
`

export const RightWarpper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color:#ccc;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .center {
    width: 90px;
    height: 32px;
    margin: 0 16px;
    text-align: center;
    line-height: 32px;
    border: 1px solid #666;
    border-radius: 16px;
  }
`
