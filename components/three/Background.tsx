import { Canvas } from '@react-three/fiber';
import WavyPlane from './WavyPlane';

import * as THREE from 'three';

const Background = () => {
    return (
        <Canvas
            flat
            shadows
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping, // 明るい部分を調整して白飛び防止
            }}
            camera={{
                fov: 45,
                near: 0.5,
                far: 100,
                position: [0, 0, 5],
            }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
            }}
        >
            <WavyPlane />
        </Canvas>
    );
};

export default Background;
