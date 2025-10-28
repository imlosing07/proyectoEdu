import Image from 'next/image';

interface PictogramTextProps {
  text: string;
  image?: string;
}

export default function PictogramText({ text, image }: PictogramTextProps) {
  return (
    <div className="inline-flex items-center gap-2 mx-1">
      <span className="font-poppins text-2xl tracking-readable">{text}</span>
      {image && (
        <div className="relative w-12 h-12 inline-block">
          <Image
            src={image}
            alt={text}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}