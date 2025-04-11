import Title from "./Title";
import { Card as CardAntd } from "antd";

interface Props {
  title: string;
  desc: string;
  onClick: () => void;
  className?: string;
}

export default function Card(props: Props) {
  const { title, desc, onClick, className } = props;

  return (
    <CardAntd
      style={{
        width: 300,
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    >
      <div className={className}>
        <Title title={title} style={{ margin: 0 }} />
        <p>{desc}</p>
      </div>
    </CardAntd>
  );
}
