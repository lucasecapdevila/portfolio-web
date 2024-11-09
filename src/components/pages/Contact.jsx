import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_in2djf6", "template_t7vjjyy", form.current, {
        publicKey: "PV3nlJmKbxFqi2P7z",
      })
      .then(() => {
        toast.success("Mensaje enviado con éxito !");
        reset();
      })
      .catch((error) => {
        toast.error("Ocurrió un problema, intente nuevamente más tarde.")
      });
  };

  return (
    <main className="min-h-[90vh] max-w-[100vw] md:h-screen px-4 lg:ps-32 py-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="titulos text-textDarkColor text-4xl md:text-5xl font-bold uppercase">
          Contactame
        </h1>
        <h2 className="titulos text-textBlack text-2xl self-start">
          ¿Quieres saber más de mí?
        </h2>
        <p className="textos text-textBlack text-md">
          Estoy disponible a nuevas oportunidades y colaboraciones! Si estás
          buscando alguien que pueda aportar nuevas ideas a tus proyectos y
          obtener resultados significativos, no dudes en ponerte en contacto
          conmigo.
        </p>
      </div>

      <form
        className="textos flex max-w-md flex-col gap-4 mt-10 border-2 rounded-md border-gray-300 p-4"
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nombre" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("user_name", {
              required: "El nombre es obligatorio.",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              }
            })}
            helperText={
              <>
                <span className="text-red-600">
                  {errors.user_name?.message}
                </span>
              </>
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Tu Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            {...register("user_email", {
              required: "El email es obligatorio.",
              minLength: {
                value: 4,
                message: "El email debe contener al menos 4 carácteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Ingrese una dirección de correo electrónico válida",
              },
            })}
            helperText={
              <>
                <span className="text-red-600">
                  {errors.user_email?.message}
                </span>
              </>
            }
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="message" value="Tu mensaje" />
          </div>
          <Textarea
            id="message"
            placeholder="Escribe tu mensaje..."
            rows={6}
            {...register("message", {
              required: "El mensaje es obligatorio.",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 200,
                message:
                  "Debe ingresar como máximo 200 carácteres para la consulta.",
              },
            })}
            helperText={
              <>
                <span className="text-red-600">
                  {errors.message?.message}
                </span>
              </>
            }
          />
        </div>
        <Button className="bg-textDarkColor" type="submit">
          Enviar
        </Button>
      </form>
      <Toaster />
    </main>
  );
};

export default Contact;
