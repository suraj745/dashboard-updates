import Stepper from "../components/Steps/Stepper";
import { Collapse } from "antd";
import React, { createContext, useContext, useState } from "react";
import BasicInformation from "../components/BusinessProfileForm/BasicInformation";
import ProfileInformation from "../components/BusinessProfileForm/ProfileInformation";
import AddressForm from "../components/AddressCommunication/AddressForm";
import OnlinePresence from "../components/OnlinePresence/OnlinePresence";
const { Panel } = Collapse;

export const stepCount = createContext();

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const formpage = [
  {
    form: <BasicInformation />,
    header: `Basic Information`,
  },
  {
    form: <ProfileInformation />,
    header: `Profile Information`,
  },
  {
    form: <AddressForm />,
    header: `Address & Communication Details`,
  },
  {
    form: <OnlinePresence />,
    header: `Online Presence`,
  },
];
const index = () => {
  const [step, setStep] = useState(0);
  const [country, setCountry] = useState("");

  return (
    <stepCount.Provider
      value={{ steps: [step, setStep], country: [country, setCountry] }}
    >
      <section className="container">
        <section className="row shadow-sm  py-4">
          <h3>Business Profile</h3>
        </section>

        <ul className="container">
          <li className="row mt-5">
            <Stepper current={step} />
          </li>

          <br />
          <li className="row justify-content-center mt-4">
            <section className="col-md-8">
              <Collapse
                className={`accordion`}
                accordion
                defaultActiveKey={0}
                expandIconPosition={"end"}
              >
                {formpage.map((value, index) => {
                  return (
                    <Panel header={<h5>{value.header}</h5>} key={index}>
                      {value.form}
                    </Panel>
                  );
                })}
              </Collapse>
            </section>
          </li>
        </ul>
      </section>
    </stepCount.Provider>
  );
};

export default index;
