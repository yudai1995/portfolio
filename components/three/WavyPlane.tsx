import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

import * as THREE from 'three';

const WavyPlane = () => {
    // メッシュの参照を作成. この参照を使ってメッシュの位置を更新
    const meshRef = useRef<THREE.Mesh>(null!);

    // マウスの位置を使って波を生成
    const scale = 2;
    const { pointer } = useThree();

    // フレーム毎の処理 経過時間を使って波を生成
    useFrame(({ clock }) => {
        if (!meshRef.current) return;

        // 経過時間
        const time = clock.getElapsedTime();

        // マウスの位置を適切なスケールに変換
        const mouseX = pointer.x * scale;
        const mouseY = pointer.y * scale;

        // メッシュの位置情報を取得
        const positions = (
            meshRef.current.geometry.attributes
                .position as THREE.BufferAttribute
        ).array;

        // 位置情報を更新
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i] + mouseX;
            const y = positions[i + 1] + mouseY;

            // 正弦波 + 余弦波
            positions[i + 2] =
                Math.sin(x * 2 + time) * 0.5 + Math.cos(y * 2 + time) * 0.5;

            // 色を更新
            // 色相Hは高さに応じて変化. Hは0~1の範囲に補正する
            (
                meshRef.current.material as THREE.MeshStandardMaterial
            ).color.setHSL(0.5 + positions[i + 2] * 0.5, 1, 0.5);
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <>
            {/* 環境光 */}
            <ambientLight intensity={1} />

            {/* 平行光 */}
            <directionalLight
                castShadow
                // ref={directionalLight}
                position={[0, 10, 5]}
                intensity={1}
                shadow-mapSize={[2048, 2048]}
            />

            {/* メッシュ. プレーンジオメトリを使って平面を生成 */}
            <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[5, 5, 50, 50]} />
                <meshStandardMaterial
                    // color='cyan'
                    transparent={true}
                    opacity={0.1}
                />
            </mesh>
        </>
    );
};

export default WavyPlane;
