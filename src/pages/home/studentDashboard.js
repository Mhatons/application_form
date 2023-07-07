import React from "react";
import user from "../../components/assets/Ayra_Starr_(cropped).png";
import Header from "../../components/layout/header";

export default function DashBoard() {
  const userInfo = [
    {
      id: 1,
      title: "Matric No",
      value: "12ms1147",
    },
    {
      id: 2,
      title: "Faculty",
      value: "Natural sciences",
    },
    {
      id: 3,
      title: "Department",
      value: "Electrical Engineering",
    },
    {
      id: 4,
      title: "State",
      value: "Kogi",
    },
    {
      id: 5,
      title: "LGA",
      value: "Dekina",
    },
    {
      id: 6,
      title: "Phone No",
      value: "+2348960877434",
    },
  ];

  const supervisorInfo = [
    {
      id: 1,
      title: "Supervisor's Name",
      value: "Cr S.C Onate",
    },
    {
      id: 2,
      title: "Email address",
      value: "cr.onate@gmail.com",
    },
    {
      id: 3,
      title: "Phone No",
      value: "+2348960877434",
    },
  ];
  return (
    <div>
      <Header title="You are logged in as" name="Mhatons Anthony" />
      <div className="w-[85%] m-auto pt-4">
        <div className="border rounded-lg p-10 relative">
          <header className=" text-zinc-500">Personal Information</header>
          <section className="grid  md:grid-cols-2 grid-cols-1 pt-5 gap-3">
            {userInfo.map((info) => (
              <div className="text-sm" key={info.id}>
                <b>{info.title}</b>
                <div>{info.value}</div>
              </div>
            ))}
          </section>
          <div className="w-[15%] rounded-3xl overflow-hidden absolute top-5 right-10">
            <img src={user} alt="" className=" object-cover" />
          </div>

          <div className="pt-8">
            <header className=" text-zinc-500">
              Institution Supervisor Details
            </header>
            <section className="grid md:grid-cols-2 grid-cols-1 pt-5 gap-3">
              {supervisorInfo.map((info) => (
                <div className="text-sm" key={info.id}>
                  <b>{info.title}</b>
                  <div>{info.value}</div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
