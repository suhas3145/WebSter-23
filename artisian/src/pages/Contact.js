import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import DottedButton from "../components/DottedButton";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y2mnrea",
        "template_lyr65x7",
        form.current,
        "6t_kDo7uQEGYqjMpK"
      )
      .then(
        (result) => {
          toast.success("sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="relative grid">
        <div className=" mt-[210px] ml-48 mr-4 w-[350px]  flex flex-col items-center text-center mx-auto bg-transparent text-gray-800 ">
          <h2 className="text-4xl  text-white font-bold tracking-wider">
            Reach Out Here
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" -mt-4 p-6  h-full w-[370px]  rounded-sm bg-pink-900 bg-opacity-50"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="w-full  p-2 mb-5 border-2 border-gray-900 bg-transparent"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className="w-full p-2 mb-5 border-2 border-gray-900 bg-transparent"
            />

            <textarea
              name="message"
              placeholder="Write Something"
              className="w-full p-2 mb-5 border-2 border-gray-900 bg-transparent"
            />
            <DottedButton
              type="submit"
              value="Send"
              className="bg-zinc-900 -mt-12 text-white p-3 rounded-md cursor-pointer "
            >
              Send
            </DottedButton>
          </form>
        </div>
        <div className="flex justify-evenly fixed bottom-0 left-0 w-full bg-black opacity-50 text-white p-4 h-[60px] ">
          <p className=" text-2xl text-white font-mono font-bold cursor-pointer hover:opacity-75">
            Copyright © 2023 Your Company Name. All Rights Reserved
          </p>
          <p className="cursor-pointer hover:opacity-75 text-2xl">
            Terms of Service
          </p>
          <p className="cursor-pointer hover:opacity-75 text-2xl">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:opacity-75 text-2xl">Cookies</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
