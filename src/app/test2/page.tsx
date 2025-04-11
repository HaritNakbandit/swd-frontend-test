 "use client"
import { useTranslation } from "next-i18next";
import PageLayout from "../../components/layout/PageLayout";
import { Button, Form, FormProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { useEffect } from "react";
import {
  createUser,
  getUserList,
  updateUser,
} from "../../lib/features/test2/test2Slice";
import moment from "moment";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import FormInfo from "./FormInfo";
import TableInfo from "./TableInfo";

const Test2 = () => {
  const { t } = useTranslation()
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { userInfo, userInfoList } = useSelector(
    (state: RootState) => state.test2
  );


  const onFinish: FormProps["onFinish"] = (values) => {
    const result = {
      ...values,
      id: values?.id || uuidv4(),
      birthDay: moment(values.birthDay).format("DD-MM-YYYY"),
      citizenID:
        values.cid1 + values.cid2 + values.cid3 + values.cid4 + values.cid5,
    };
    if (values?.id) {
      dispatch(updateUser(result));
    } else {
      dispatch(createUser(result));
    }
  };

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue({
        ...userInfo,
        birthDay: userInfo.birthDay
          ? moment(userInfo.birthDay, "DD-MM-YYYY")
          : null,
        title: userInfo.title || null,
        nationally: userInfo.nationally || null,
        cid1: userInfo.citizenID.slice(0, 1),
        cid2: userInfo.citizenID.slice(1, 5),
        cid3: userInfo.citizenID.slice(5, 10),
        cid4: userInfo.citizenID.slice(10, 12),
        cid5: userInfo.citizenID.slice(12, 13),
      });
    }
  }, [userInfo]);

  return (
    <PageLayout title={t("test_2_desc")}>
      <div style={{ padding: "25px" }}>
        <Button
          style={{ float: "right" }}
          onClick={() => {
            router.push("/");
          }}
        >
          {t("button_home")}
        </Button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              padding: "15px",
              border: "1px solid black",
              borderRadius: "8px",
            }}
          >
            <FormInfo form={form} onFinish={onFinish} />
          </div>
        </div>
        <TableInfo dataList={userInfoList} />
      </div>
    </PageLayout>
  );
};

export default Test2;
