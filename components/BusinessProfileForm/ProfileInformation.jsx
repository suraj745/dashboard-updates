import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import {
  Cascader,
  Input,
  Select,
  Space,
  DatePicker,
  DatePickerProps,
  Radio,
} from "antd";
import moment from "moment";

const { Option } = Select;
const children = [];

const options = [
  ` Ui Designer`,
  `  Software Developer`,
  `  Website Developer`,
  `  Compliance & Tax`,
  `  Writing`,
  `Webflow Designer`,
  `  Shopify Developer`,
  `  Call Center Services`,
];

options.forEach((element, index) => {
  children.push(<Option key={index}>{element}</Option>);
});

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const ProfileInformation = () => {
  const [individual, setIndividual] = useState(true);
  const time = new Date();

  const [size, setSize] = useState("middle");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <section className="container">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <h5> What describes you best?</h5>
          </label>
          <br />
          <Radio.Group
            defaultValue="Individual/Freelancer"
            buttonStyle="solid"
            className="custom-select"
          >
            <Radio.Button
              value="Individual/Freelancer"
              onClick={() => {
                setIndividual(true);
              }}
            >
              Individual/Freelancer
            </Radio.Button>
            <Radio.Button
              onClick={() => {
                setIndividual(false);
              }}
              value="Team/Agency/Company
"
            >
              Team/Agency/Company
            </Radio.Button>
          </Radio.Group>
        </div>

        {!individual && (
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">
              Team Size <span className="text-danger">*</span>
            </label>
            <input
              type={`number`}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Number of people working in your company"
            />
          </div>
        )}
        <br />

        <div class="col-md-6">
          <label for="exampleInputEmail1" class="form-label">
            Set your Profile URL <span className="text-danger">*</span>
            <div class="form-text">
              Set a URL for your new profile. Help people find you online.
            </div>
          </label>

          <Input addonBefore="https://www.refrens.com" defaultValue="mysite" />
        </div>
        <br />

        <div class="col-md-6">
          <label for="exampleInputEmail1" class="form-label">
            In Business Since
            <div class="form-text">
              Month and Year of when you started the business
            </div>
          </label>

          <DatePicker
            defaultValue={moment("2022/01", "YYYY / MM")}
            format={"YYYY / MM"}
            picker="month"
          />
        </div>

        <br />

        <div class="col-md-6">
          <label for="exampleInputEmail1" class="form-label">
            Your Business Category
            <div class="form-text">
              Month and Year of when you started the business
            </div>
          </label>
          <Select
            mode="multiple"
            size={size}
            placeholder="Please select"
            defaultValue={[]}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          >
            {children}
          </Select>
        </div>

        <br />

        <section className="row gap-3">
          <span type="submit" class="btn btn-primary col-sm-4">
            Save & Continue
          </span>

          <button type={"reset"} class="btn btn-danger col-sm-4 ">
            Reset
          </button>
        </section>
      </form>
    </section>
  );
};

export default ProfileInformation;
