import useImage from '@/data/image';
import styles from '@/styles/Home.module.css';

export default function StationImage(props) {
  const { image, isLoading, isError } = useImage(props.station);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!image) return <div><img className={props.imageClassName} src="/no-image.jpeg" width="100%" height="300px" alt="No Image"/></div>;

  return (
    <img className={props.imageClassName} src={image} width="100%" height="300px" alt={props.station.name}/>
  );
}
