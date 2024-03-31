import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { HeaderSide } from "./components/header-side";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

const SERVICE_ID = "service_5yuatnj";
const TEMPLATE_ID = "template_g04he79";
const PUBLIC_KEY = "GiKL-_cOw87E5Dyr_";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

export function Contact() {
  const title = "Let's Connect. ";
  const textContent = [
    "I'm excited to hear about you and how we can collaborate. ",
    "Please tell me a little bit about yourself and your project. ",
    "I appreciate your interest and look forward to getting to know you.  ",
    // Add more paragraphs as needed
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: Record<string, unknown> | undefined) => {
    // Instead of sending the form directly, use emailjs.send with the template params
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire("Message Sent Successfully", "", "success");
        reset(); // Reset the form fields after successful submission
      },
      (error) => {
        console.log(error.text);
        Swal.fire("Oops, something went wrong", error.text, "error");
      }
    );
  };

  const container = useRef(null);

  useGSAP(
    () => {
      // Set the initial opacity to 0
      gsap.set("#box", { opacity: 0 });

      gsap.to("#box", {
        opacity: 1, // Animate to full opacity
        duration: 1, // Duration of the animation (optional, adjust as needed)
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className=" w-full   flex flex-rows justify-center mb-20 md:my-20 "
    >
      <div
        className="  w-full max-w-[700px] flex  flex-col justify-center gap-0 sm:mx-10 mx-5 "
        id="box"
      >
        <HeaderSide title={title} textContent={textContent} />
        <div className="  w-full h-full   flex flex-col justify-center ">
          <div>
            <div
              id="envelope pattern"
              className="w-full h-[24px]  bg-light-divider dark:bg-dark-divider envelope-bg"
            ></div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col gap-4 font-roboto w-ful bg-light-divider dark:bg-dark-divider sm:p-10 p-4 "
            >
              <div>
                <p className="uppercase font-semibold  text-light-text-light dark:text-dark-text-light">
                  From
                </p>
              </div>
              <div className=" flex flex-col gap-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    {...register("name")}
                    className="h-[48px] "
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm   mt-1">
                      {errors.name.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    placeholder="example@example.com"
                    {...register("email")}
                    className="h-[48px] "
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm   mt-1">
                      {errors.email.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your message here"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm   mt-1">
                      {errors.message.message?.toString()}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="uppercase font-semibold  text-light-text-light dark:text-dark-text-light">
                  To
                </p>
                <p className=" text-[16px]">
                  Fausto Nuñez <br></br> faustonunez01@gmail.com{" "}
                </p>
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
