import MacintoshExplorer from '../../components/macintoshExplorer';
import { Canvas } from '@react-three/fiber';

const Explore = () => {
  return (
    <div
      style={{
        background: 'black',
        height: '100vh',
        display: 'flex',
        alignItems: 'end',
        padding: '1rem'
      }}>
      <Canvas
        style={{
          height: '500px',
          width: '835px',
          border: 'solid 1px white',
          background: '#D9D9D9'
        }}>
        <MacintoshExplorer />
      </Canvas>
    </div>
  );
};

export default Explore;
