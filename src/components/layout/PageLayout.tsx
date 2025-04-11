import { Layout, Select } from "antd";
import i18next from "../../i18n";
import { Title } from "../ui";
import { useTranslation } from "next-i18next";

interface Props {
  children: React.ReactNode;
  title?: string;
}
const { Header, Content } = Layout;

export default function PageLayout(props: Props) {
  const { children, title } = props;
  const { t } = useTranslation();

  const handleChange = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  return (
    <Layout
      style={{
        background: "#6eda78 linear-gradient(90deg, #6eda78 0%, #ffa200 100%)",
      }}
    >
      <Content
        style={{
          height: `100vh`,
          overflow: "auto",
          overflowY: "scroll",
        }}
      >
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0 20px",
          }}
        >
          <Title title={title ?? ""} level={1} />
          <Select
            value={i18next.language}
            onChange={handleChange}
            style={{
              width: "80px",
            }}
            options={[
              { value: "en", label: t("en") },
              { value: "th", label: t("th") },
            ]}
          />
        </Header>
        {children}
      </Content>
    </Layout>
  );
}
