import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("global");

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
        toast.error("Ocurrió un problema, intente nuevamente más tarde.");
      });
  };

  return (
    <main className="min-h-[90vh] max-w-[100vw] md:h-screen px-4 lg:ps-32 py-10 lg:flex">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:mb-32">
        <div className="flex flex-col justify-center items-center gap-4 lg:w-1/2">
          <h1 className="titulos text-textDarkColor text-4xl md:text-5xl lg:self-start font-bold uppercase">
            {t("contact.title")}
          </h1>
          <h2 className="titulos text-textBlack text-2xl lg:text-3xl self-start">
            {t("contact.subtitle")}
          </h2>
          <p className="textos text-textBlack text-md lg:text-lg">
            {t("contact.text")}
          </p>
        </div>

        <form
          className="textos flex max-w-md md:max-w-2xl flex-col gap-4 mt-10 border-2 rounded-md border-gray-300 p-4 w-full"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value={t("contact.form_label_1")} />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder={t("contact.form_input_1")}
              shadow
              {...register("user_name", {
                required: `${t("contact.form_input_1_required")}`,
                minLength: {
                  value: 3,
                  message: `${t("contact.form_input_1_minLength")}`,
                },
                pattern: {
                  value: /^[A-zÀ-ú]+$/gm,
                  message: `${t("contact.form_input_1_pattern")}`,
                },
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
              <Label htmlFor="email" value={t("contact.form_label_2")} />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder={t("contact.form_input_2")}
              shadow
              {...register("user_email", {
                required: `${t("contact.form_input_2_required")}`,
                minLength: {
                  value: 4,
                  message: `${t("contact.form_input_2_minLength")}`,
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: `${t("contact.form_input_2_pattern")}`,
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message" value={t("contact.form_label_3")} />
            </div>
            <Textarea
              id="message"
              placeholder={t("contact.form_input_3")}
              rows={6}
              shadow
              {...register("message", {
                required: `${t("contact.form_input_3_required")}`,
                minLength: {
                  value: 10,
                  message: `${t("contact.form_input_3_minLength")}`,
                },
                maxLength: {
                  value: 1000,
                  message: `${t("contact.form_input_3_maxLength")}`,
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
          <Button className="bg-textDarkColor lg:w-1/2 lg:self-end" type="submit">
            {t("contact.button")}
          </Button>
        </form>
        <Toaster />
      </div>
    </main>
  );
};

export default Contact;
