import Image from "next/image";

const Tool = ({ image, styles }) => {
  return (
    <div className={styles}>
      <Image src={image} width={40} height={40} />
    </div>
  );
};

export default Tool;
