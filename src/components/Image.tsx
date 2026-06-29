import type { ImageProps } from "../types/image";

export default function Image({ imageUrl }: ImageProps) {
    return (
        <div>
            <img src={imageUrl} />
        </div>
    );
};