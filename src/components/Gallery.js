/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import gridcategory from './../assets/gridcategory.svg';
import profilebubble from './../assets/profilebubble.svg';
import WuGF06 from './../assets/WuGF06.jpg';
import bookmark from './../assets/settingsbookmark.svg';
import instagramlogo from './../assets/instagramlogo.png';
const Gallery = () => {

  const gallery = css`
      hr {
          height: 1px;
          background: black;
          width: 98%;
      }

      .categorylist {
          display: flex;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          flex-direction: row;
          text-align: center;
          gap: 20px;
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          line-height: 16px;
          font-weight: 600;
      }

      .category {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          justify-items: center;
          gap: 10px;
      }

      .categorylist__item1, .categorylist__item2, .categorylist__item3 {
          display: flex;
          align-items: center;
      }

      .category__item__imgresize {
        width: 300px;
        height: 300px;
        object-fit: cover;
      }
  `;

  return (
      <div css={gallery}>
          <hr />
          <div className="categorylist">
              <div className="categorylist__item1">
                  <img src={gridcategory} />
                  <span>POSTS</span>
              </div>
              <div className="categorylist__item2">
                  <img src={bookmark} />
                  <span>Saved</span>
              </div>
              <div className="categorylist__item3">
                  <img src={profilebubble} />
                  <span>TAGGED</span>
              </div>
          </div>
          <div className="category">
              <div><img src={instagramlogo} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
              <div><img src={WuGF06} className="category__item__imgresize" /></div>
          </div>
      </div>
  );
}

export default Gallery;