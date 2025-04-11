"use client";
import { useTranslation } from "next-i18next";
import PageLayout from "../../components/layout/PageLayout";
import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import styles from "./page.module.css";

const shape = [
  "square",
  "circle",
  "oval",
  "trapezoid",
  "rectangle",
  "parallelogram",
];

const Test1 = () => {
  const { t } = useTranslation();
  const [isMovePosition, setIsMovePosition] = useState<boolean>(false);
  const [shapeArray, setShapeArray] = useState<string[]>(shape);

  const handleMovePosition = () => {
    setIsMovePosition((prev) => !prev);
  };

  const handleShufflePosition = () => {
    const array = [...shapeArray];
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    setShapeArray(shuffledArray);
  };

  const handleMoveShape = (reverse?: boolean) => {
    const array = [...shapeArray];
    if (!reverse) {
      array.push(array.shift()!);
    } else {
      array.unshift(array.pop()!);
    }
    setShapeArray(array);
  };

  return (
    <PageLayout title={t("test_1_desc")}>
      <div className={styles.main}>
        <div className={styles.content}>
          <Row justify="start" gutter={[16, 16]}>
            <Col span={6}>
              <div
                onClick={() => handleMoveShape()}
                className={`${styles.card} ${styles.justify_center}`}
              >
                <div className={styles.triangle_left} />
                <p className={styles.label}>{t("move_shape")}</p>
              </div>
            </Col>
            <Col span={12}>
              <div onClick={() => handleMovePosition()}>
                <div
                  className={`${styles.card} ${styles.justify_space_around}`}
                >
                  <div className={styles.triangle_up} />
                  <div className={styles.triangle_down} />
                  <p className={styles.label}>{t("move_position")}</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div
                className={`${styles.card} ${styles.justify_center}`}
                onClick={() => handleMoveShape(true)}
              >
                <div className={styles.triangle_right} />
                <p className={styles.label}>{t("move_shape")}</p>
              </div>
            </Col>
          </Row>
          <Divider />
          {/* 1 */}
          <Row justify={isMovePosition ? "end" : "center"} gutter={[16, 16]}>
            {shapeArray?.map((item: string, index: number) => (
              <React.Fragment key={index}>
                {index < 3 && (
                  <Col span={6}>
                    <div
                      className={`${styles.card} ${styles.justify_center}`}
                      onClick={() => handleShufflePosition()}
                    >
                      <div className={styles[item]} />
                    </div>
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
          <div style={{ margin: "16px 0" }} />
          {/* 2 */}
          <Row justify={isMovePosition ? "center" : "end"} gutter={[16, 16]}>
            {shapeArray?.map((item: string, index: number) => (
              <React.Fragment key={index}>
                {index >= 3 && (
                  <Col span={6}>
                    <div
                      className={`${styles.card} ${styles.justify_center}`}
                      onClick={() => handleShufflePosition()}
                    >
                      <div className={styles[item]} />
                    </div>
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
        </div>
      </div>
    </PageLayout>
  );
};

export default Test1;
