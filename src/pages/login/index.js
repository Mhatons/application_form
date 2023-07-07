import React, { useState } from "react";
import Form from "../../components/layout/formTemplate";
import Input from "../../components/features/input";
import PasswordInput from "../../components/features/passwordInput";
import Button from "../../components/features/button";
import Modal from "../../components/layout/modal";
import {PiHandWavingLight} from "react-icons/pi"
import Header from "../../components/layout/header";

export default function Login() {
 const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  };

  return (
    <div>
      <div>
        <Header title="Welcome to the login portal" icon={true} />
        <div className="">
          <div className="w-[85%] m-auto">
            <Form title="Login Form">
              <Input title="Matric No" text="12ms1147" />
              <PasswordInput title="Password" text="12345678" />
              <div className="flex gap-7 items-center pt-5">
                <Button text="Login" status={false} fn={() => handleModal()} />
                <Button text="Reset" />
              </div>
            </Form>
          </div>
          {/* <div className="w-[50%]">
            <Form title="Admin/Supervisor Login">
              <Input title="Username" text="mhatons" />
              <PasswordInput title="Password" text="12345678" />
              <div className="flex gap-7 items-center pt-5">
                <Button text="Sign in" fn={() => handleModal()} />
                <Button text="Reset" />
              </div>
            </Form>
          </div> */}
        </div>
      </div>
      {modal && <Modal handleCloseModal={handleModal} />}
    </div>
  );
}
