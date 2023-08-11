import useImage from 'use-image';
import { Image } from 'react-konva';

export const CanvasImage = ({src, x, y, width, height, imageRef}) => {
    const [image] = useImage(src);
    return <Image ref={imageRef} image={image} width={width} height={height} x={x} y={y}/>
}