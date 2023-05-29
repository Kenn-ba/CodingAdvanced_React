import React from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import StationImage from '@/components/stationImage';

export default function Station(props) {
  return (
    <Link href={`/stations/${props.station.id}`} className={styles.beacon}>
      <StationImage
        station={props.station}
        imageClassName={styles.beacon__image} // Custom CSS class for the image
      />
      <div className={styles.beacon__content}>
        <h2 className={styles.beacon__address}>{props.station.extra.address}</h2>
        <h3 className={styles.beacon__name}>{props.station.name}</h3> 
          <p className={styles.beacon__amount}>{props.station.free_bikes} available</p>
          <p className={styles.beacon__distance}>{props.station.distance * 1000}m</p>
      </div>
      
    </Link>
  );
}
