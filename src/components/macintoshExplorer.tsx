import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Macintosh from '../../public/Macintosh.jsx';

const MacintoshExplorer = () => {
  return (
    <>
      <OrbitControls />
      <Suspense fallback={null}>
        <Macintosh />
      </Suspense>
      <Environment preset="night" />
    </>
  );
};

export default MacintoshExplorer;
