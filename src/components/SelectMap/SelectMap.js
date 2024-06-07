import './SelectMap.css';
import anh from '../img/anh.jpg';
import { Link } from "react-router-dom";
import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 21.028511,
  lng: 105.804817
};

const SelectMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBa7UlmsSGVz7NA2HkBdfevTBiwIPP2mdY'
  });

  const [imgOpacity, setImgOpacity] = useState(1);
  const handleChange = (e) => {
    setImgOpacity(e.target.value / 100);
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    const imageBounds = {
      north: 21.033,
      south: 21.024,
      east: 105.809,
      west: 105.800,
    };

    new window.google.maps.GroundOverlay(
      anh,
      imageBounds,
      { opacity: imgOpacity }
    ).setMap(map);
  }, [imgOpacity]);

  const onUnmount = useCallback(function callback(map) {}, []);

  return (
    <div className="map">
      <div className="map-menu">
        <div className='map-logo'>
          <Link to='/'>
            <img className="logo" src='https://baodanang.vn/dataimages/202109/original/images1623764_f1.png' alt='' />
          </Link>
          <span>THÔNG TIN THẬT-GIÁ TRỊ THẬT</span>
        </div>
        <div className='map-menu-item'>
          <i className="bi bi-house-door"></i>
          <span>Mua bán</span>
        </div>
        <div className='map-menu-item'>
          <i className="bi bi-handbag-fill"></i>
          <span>Cho thuê</span>
        </div>
        <div className='map-menu-item'>
          <i className="bi bi-list"></i>
          <span>Danh mục</span>
        </div>
        <input
          type="range" min="0" max="100" value={imgOpacity * 100}
          onChange={handleChange}
        />
      </div>

      <div className="gg-map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            onLoad={onLoad}
            onUnmount={onUnmount}
          
          >
          </GoogleMap>
        ) : <></>}
      </div>
    </div>
  );
};

export default SelectMap;
