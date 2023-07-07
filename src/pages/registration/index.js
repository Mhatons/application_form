import React, { useState } from "react";
import Form from "../../components/layout/formTemplate";
import Input from "../../components/features/input";
import PasswordInput from "../../components/features/passwordInput";
import Button from "../../components/features/button";
import Modal from "../../components/layout/modal";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/header";

export default function Reg() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const UserDetails = [
    {
      id: 1,
      title: "First name",
      text: "Anthony",
    },
    {
      id: 2,
      title: "Last name",
      text: "Mhatons",
    },
    {
      id: 3,
      title: "Phone Number",
      text: "+2348960877434",
    },
    {
      id: 4,
      title: "Email",
      text: "mhatons@gmail.com",
    },
    {
      id: 5,
      title: "Department",
      text: "Electrical Engineering",
    },
    {
      id: 6,
      title: "Matric No",
      text: "12ms1147",
    },
  ];

  return (
    <div>
      <Header title="Welcome to the registration portal" icon={true} />
      <div className=" pt-0">
        <div className="w-[85%] m-auto">
          <Form title="Registration Form">
            {UserDetails.map((userInfo) => (
              <Input
                key={userInfo.id}
                title={userInfo.title}
                text={userInfo.text}
              />
            ))}
            <PasswordInput title="Password" text="12345678" />
            <div className="flex gap-7 items-center pt-5">
              <Button
                text="Sign up"
                status={false}
                fn={() => navigate("/login")}
              />
              <Button text="Reset" />
            </div>
          </Form>
        </div>
      </div>
      {modal && <Modal handleCloseModal={handleModal} />}
    </div>
  );
}
