import Link from 'next/link';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';
import { getDistance } from '@/utils/getDistance';
import useNetwork from '@/data/network';
import StationBeacon from '@/components/station';

export default function Home() {
  const [location, setLocation] = useState({});
  const { network, isLoading, isError } = useNetwork();

  // use effect gebruiken om bv iets op te roepen enkel bij opstart van de app
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);


    const [filter,setFilter] = useState('');
    
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  const stations = network.stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }
  console.log(stations)

  return (
    <>
      <Head>
        <title>Velo</title>
        <meta name="description" content="Cycle studio application - school project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className={styles.body}>
        <header>
          <h1 className={styles.title}>VELO</h1>
        </header>
        <main>
          <div className={styles.stationCard}>
            <div className={styles.stationCard__content}>
              {stations.map(station => <StationBeacon station={station} key={station.id} />)}
            </div>
          </div>
        </main>
      </body>
    </>
  )
}
