import { useTranslation } from "next-i18next";
import {
  Button,
  Form,
  Input,
  Select,
  Flex,
  DatePicker,
  Radio,
  FormInstance,
} from "antd";
import {
  optionTitle,
  Option,
  optionNationally,
  optionGender,
  optionCountyCode,
  OptionWithImg,
} from "./option";
import { useDispatch } from "react-redux";
import { clearUser } from "../../lib/features/test2/test2Slice";
import { RefObject, useRef } from "react";
import Image, { StaticImageData } from 'next/image'

interface CountyCodeProps {
  imgSrc: StaticImageData;
  label: string;
}

interface Props {
  form: FormInstance<unknown>;
  onFinish: (values: unknown) => void;
}
const Space = () => {
  return (
    <span
      style={{
        display: "inline-block",
        width: "24px",
        lineHeight: "32px",
        textAlign: "center",
      }}
    >
      -
    </span>
  );
};

const CountyCode = (props: CountyCodeProps) => {
  const { imgSrc, label } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image src={imgSrc} alt={""} height={18} />
      {label}
    </div>
  );
};

const FormInfo = (props: Props) => {
  const { form, onFinish } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const inputRefs = {
    input1: useRef(null),
    input2: useRef(null),
    input3: useRef(null),
    input4: useRef(null),
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextInput: RefObject<HTMLInputElement>
  ) => {
    if (e.target.value.length >= e.target.maxLength) {
      nextInput?.current?.focus();
    }
  };

  return (
    <Form
      form={form}
      layout={"horizontal"}
      initialValues={{ remember: true }}
      onFinish={(v) => onFinish(v)}
      autoComplete="off"
    >
      {/* 1 */}
      <Flex gap={"small"}>
        <Form.Item
          label={t("title")}
          name="title"
          rules={[{ required: true, message: t("title_required") }]}
        >
          <Select style={{ width: 150 }} placeholder={t("title_placeholder")}>
            {optionTitle?.map((item: Option, index: number) => (
              <Select.Option
                value={item?.value}
                key={`title-option-${index + 1}`}
              >
                {t(`title_select.${item?.value}`)}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={t("first_name")}
          name="firstName"
          rules={[{ required: true, message: t("first_name_required") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("last_name")}
          name="lastName"
          rules={[{ required: true, message: t("last_name_required") }]}
        >
          <Input />
        </Form.Item>
      </Flex>
      {/* 2 */}
      <Flex gap={"small"}>
        <Form.Item
          label={t("birthday")}
          name="birthDay"
          rules={[{ required: true, message: t("birthday_required") }]}
        >
          <DatePicker placeholder={t("birthday_placeholder")} />
        </Form.Item>
        <Form.Item
          label={t("nationally")}
          name="nationally"
          rules={[{ required: true, message: t("nationally_required") }]}
        >
          <Select
            style={{ width: 240 }}
            placeholder={t("nationally_placeholder")}
          >
            {optionNationally?.map((item: Option, index: number) => (
              <Select.Option
                value={item?.value}
                key={`nationally-option-${index + 1}`}
              >
                {t(`nationally_select.${item?.value}`)}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Flex>
      {/* 3 */}
      <Flex gap={"small"}>
        <Form.Item label={t("citizen_id")} name="cid1">
          <Input
            maxLength={1}
            onChange={(e) => handleInputChange(e, inputRefs.input1)}
            style={{ width: 50, textAlign: "center" }}
          />
        </Form.Item>
        <Space />
        <Form.Item label={""} name="cid2">
          <Input
            ref={inputRefs.input1}
            maxLength={4}
            onChange={(e) => handleInputChange(e, inputRefs.input2)}
            style={{ width: 100, textAlign: "center" }}
          />
        </Form.Item>
        <Space />
        <Form.Item label={""} name="cid3">
          <Input
            ref={inputRefs.input2}
            maxLength={5}
            onChange={(e) => handleInputChange(e, inputRefs.input3)}
            style={{ width: 150, textAlign: "center" }}
          />
        </Form.Item>
        <Space />
        <Form.Item label={""} name="cid4">
          <Input
            ref={inputRefs.input3}
            maxLength={2}
            onChange={(e) => handleInputChange(e, inputRefs.input4)}
            style={{ width: 100, textAlign: "center" }}
          />
        </Form.Item>
        <Space />
        <Form.Item label={""} name="cid5">
          <Input
            ref={inputRefs.input4}
            maxLength={1}
            style={{ width: 50, textAlign: "center" }}
          />
        </Form.Item>
      </Flex>

      {/* 4 */}
      <Form.Item
        label={t("gender")}
        name="gender"
        rules={[{ required: true, message: t("gender_required") }]}
      >
        <Radio.Group >
          {optionGender?.map((item: Option, index: number) => (
            <Radio value={item?.value} key={`gender-option-${index + 1}`}>
              {t(`gender_select.${item?.value}`)}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
      {/* 5 */}
      <Flex gap={"small"}>
        <Form.Item
          label={t("mobile_phone")}
          name="countyCode"
          rules={[
            {
              required: true,
              message: t("mobile_phone_required"),
            },
          ]}
        >
          <Select style={{ width: 180 }}>
            {optionCountyCode?.map((item: OptionWithImg, index: number) => (
              <Select.Option
                value={item?.value}
                key={`country-code-option-${index + 1}`}
              >
                <CountyCode imgSrc={item?.img} label={item?.value} />
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Space />
        <Form.Item
          label=""
          name="mobileNumber"
          rules={[
            {
              required: true,
              message: t("mobile_phone_required"),
            },
          ]}
        >
          <Input maxLength={10} />
        </Form.Item>
      </Flex>
      {/* 6 */}
      <Form.Item label={t("passport_no")} name="passportNo">
        <Input style={{ width: "50%" }} />
      </Form.Item>
      {/* 7 */}
      <Flex gap={100}>
        <Form.Item
          label={t("expect_salary")}
          name="expectSalary"
          rules={[{ required: true, message: t("expect_salary_required") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button
            onClick={() => {
              dispatch(clearUser());
              form.resetFields();
            }}
          >
            {t("button_reset")}
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button htmlType="submit">{t("button_submit")}</Button>
        </Form.Item>
        <Form.Item name="id">
          <Input type="hidden" />
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default FormInfo;
