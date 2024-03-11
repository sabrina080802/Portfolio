import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    if (!e) return;
    emailjs
      .sendForm(
        "service_7i4026l",
        "template_zmhmegw",
        e.target,
        "JATCikTfICPZDjEUZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setSubmitMessage("Message envoyé avec succès !");
          reset();
        },
        (error) => {
          console.error(error);
          setSubmitted(true);
          setSubmitMessage("Échec de l'envoi du message. Veuillez réessayer.");
        }
      );
  };

  // const { register, handleSubmit } = useForm<FormData>();

  // async function onSubmit(data: FormData) {
  //   sendEmail(data);
  // }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Votre nom / prénom
          </label>
          <input
            type="text"
            placeholder="Nom - prénom"
            className="w-full rounded-md border border-gray-300 bg-white py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Adresse email
          </label>
          <input
            type="email"
            placeholder="adresse@email.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            Votre message
          </label>
          <textarea
            rows={4}
            placeholder="Bonjour Sabrina, je te contacte parce que..."
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}
          />
        </div>
        <div>
          <button className="btn-type-1">Envoyer</button>
        </div>
      </form>
      {submitted && submitMessage && <p>{submitMessage}</p>}
    </>
  );
};

export default Contact;
