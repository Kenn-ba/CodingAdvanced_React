import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import StationImage from '@/components/stationImage.js'

export default function station(props){
    return(
        <Link href={`/stations/${props.station.id}`} className={styles.card}>
            <StationImage station={props.station} />
            <h2>{props.station.name}</h2> 
            <h3>{props.station.extra.address}</h3>
            <div className={styles.beacon}>
                <p className={styles.beacon__amount}>{props.station.free_bikes}</p>
                <p className={styles.beacon__distance}>{props.station.distance * 1000}m</p>
            </div>
        </Link>
    )
}