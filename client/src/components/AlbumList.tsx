import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

interface Album {
  userId: string;
  id: number;
  title: string;
}

const fetchAlbums = async () => {
  const { data } = await axios.get<Album[]>(
    'https://jsonplaceholder.typicode.com/albums'
  );
  await sleep(5000);
  return data;
};

export const AlbumList = () => {
  const { data } = useQuery<Album[]>(['albums'], fetchAlbums);
  return (
    <div
      style={{
        height: 300,
        border: '2px solid gray',
        background: 'cornsilk',
        overflowY: 'scroll',
      }}
    >
      <h2>アルバム</h2>
      {data?.map((album) => (
        <p key={album.id}>{album.title}</p>
      ))}
    </div>
  );
};
