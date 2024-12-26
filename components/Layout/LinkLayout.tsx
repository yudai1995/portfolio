import Image from "next/image";

interface LinkLayout {
  name: string;
  url: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
}


// 外部リンクのレイアウト
const LinkLayout: React.FC<LinkLayout> = ({
  name,
  url,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  return (
    <a href={url} target="_blank" className="pageLink" rel="noreferrer">
      <span className="linkIcon">
        <Image
          src={imgSrc}
          className="icon"
          alt={name}
          width={imgWidth}
          height={imgHeight}
        />
      </span>
      {name}
    </a>
  );
};

export default LinkLayout;
