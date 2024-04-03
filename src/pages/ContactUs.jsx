import Container from "../components/shared/Container";
import SectionTitle from "../components/shared/SectionTitle";
import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
  return (
    <Container>
      <SectionTitle title={"Contact Us"} />
      <div className=" text-justify grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        <div>
          <img
            className="h-[400px] mx-auto rounded-full"
            src="https://img.freepik.com/free-vector/contact-button-scribble_23-2147501432.jpg?w=740&t=st=1712132859~exp=1712133459~hmac=4e73747b2f3d921f3b32f014761ce9691a24f66f43f2da9ff675854482dee8f2"
            alt=""
          />
        </div>
        <div>
          <form action="" className=" mt-5 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className=" px-3 py-2 border-b-2 border-primary border-opacity-45 outline-none rounded w-full bg-transparent "
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border-b-2 outline-none border-primary border-opacity-45 rounded w-full bg-transparent "
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="px-3 py-2 border-b-2  outline-none border-primary border-opacity-45 rounded w-full bg-transparent "
            />
            <textarea
              type="text"
              placeholder="Message"
              className="px-3 py-2 border-b-2 outline-none border-primary border-opacity-45 rounded w-full bg-transparent "
            />
          </form>
          <button
            type="submit"
            className=" flex items-center gap-3 justify-center w-full lg:px-5 px-3 py-4 my-3 text-white rounded-md  font-medium   duration-300 bg-gradient-to-l from-primary to-secondary hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
          >
            <span>
              <IoIosSend />
            </span>{" "}
            Send Message
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
