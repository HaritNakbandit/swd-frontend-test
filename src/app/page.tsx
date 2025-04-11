"use client";
import { PageLayout } from "../components/layout";
import { Card } from "../components/ui";
import { Flex } from "antd";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import styles from "./page.module.css";

const Home = () => {
  const { t } = useTranslation()
  const router = useRouter();

  const handleClickCard = (path: string) => {
    router.push(path);
  };

  return (
    <PageLayout>
      <Flex
        gap={"small"}
        justify={"center"}
        align="center"
        style={{ height: `calc(100% - 64px)` }}
      >
        <Card
          title={t("test_1_title")}
          desc={t("test_1_desc")}
          onClick={() => handleClickCard("/test1")}
          className={styles.card}
        />
        <Card
          title={t("test_2_title")}
          desc={t("test_2_desc")}
          onClick={() => handleClickCard("/test2")}
          className={styles.card}
        />
      </Flex>
    </PageLayout>
  );
};

export default Home;
