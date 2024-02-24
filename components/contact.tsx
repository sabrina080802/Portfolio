import { FormEvent } from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
    const {register, handleSubmit} = useForm<FormData>();

    async function onSubmit(data: FormData) {
        sendEmail(data);
    }

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
              placeholder='adresse@email.com'
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
      </>
    );
};


export default Contact;