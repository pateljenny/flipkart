import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel autoplay>
        <img src="http://www.computerplus.com.mv/v1/wp-content/uploads/2017/03/web-banner-laptops-.jpg" height="300px"/>
        <img src="https://aamentech.com/wp-content/uploads/2018/10/banner-digi4home.com-5.jpg" />
        <img src="http://www.asndepot.com/v/vspfiles/photos/homepage/1426194637758.jpg" />
        <img src="https://banner2.kisspng.com/20180205/tkq/kisspng-web-banner-tablet-computer-laptop-tablet-banner-5a78b6b38631e4.9093943915178605315497.jpg" />
        <img src="https://cdn5.f-cdn.com/contestentries/1414523/26182642/5b9ba7c5cc13f_thumb900.jpg" />
        <img src="http://www.winworldexports.com/images/banner-01.jpg" />
      </Carousel>
    );
  }
}