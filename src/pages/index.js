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

  const [nearestStations, setNearestStations] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const updatedStations = network?.stations?.map(station => ({
            ...station,
            distance: getDistance(latitude, longitude, station.latitude, station.longitude).distance / 1000
          }));

          // Sort stations by distance
          updatedStations.sort((a, b) => a.distance - b.distance);

          // Slice the array to get the first 4 stations
          const nearest = updatedStations.slice(0, 4);

          setLocation({ latitude, longitude });
          setNearestStations(nearest);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [network]);

  const [filter, setFilter] = useState('');

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }
  console.log(nearestStations)

  return (
    <>
      <Head>
        <title>Velo</title>
        <meta name="description" content="Cycle studio application - school project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.body}>
        <header>
          <h1 className={styles.title}>VELO</h1>
        </header>
        <main>
          <div className={styles.stationCard}>
            {nearestStations.map(station => <StationBeacon station={station} key={station.id} />)}
          </div>
        </main>
      </div>
    </>
  )
}
