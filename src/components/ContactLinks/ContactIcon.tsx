interface Props {
  platform: string;
  link: string;
  image: string;
}

const ContactIcon = ({ platform, link, image }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="h-14 duration-200 hover:scale-110"
        src={image}
        alt={platform}
      />
    </a>
  );
};

export default ContactIcon;
