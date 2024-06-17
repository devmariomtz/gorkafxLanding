import { Formik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Formulario = () => {
  const form_url = import.meta.env.VITE_FORM_URL;
  const name_entry = import.meta.env.VITE_NAME_ENTRY;
  const email_entry = import.meta.env.VITE_EMAIL_ENTRY;
  const plan_entry = import.meta.env.VITE_PLAN_ENTRY;
  return (
    <div className="flex py-5 md:w-[50%] flex-col md:p-4 gap-4">
      <Toaster />
      <p className="text-center text-2xl font-bold">
        FORMULARIO DE PREINSCRIPCIÓN
      </p>
      <Formik
        className=""
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Ingrese su email por favor";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Ingrese una dirección de correo valida";
          }
          if (!values.name) {
            errors.name = "Ingrese su nombre por favor";
          }
          if (!values.plan) {
            errors.plan = "Seleccione un plan por favor";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          // hacer un post a la api del formulario con los valores en formData
          const formData = new FormData();
          formData.append(name_entry, values.name);
          formData.append(email_entry, values.email);
          formData.append(plan_entry, values.plan);

          const params = new URLSearchParams();
          for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
          }

          try {
            await axios.post(form_url, params);
            toast.success("Mensaje enviado! 🤩📈", { duration: 2500 });
          } catch (error) {
            console.error(error);
            toast.error("No pudimos enviar el mensaje 😥", {
              duration: 2500,
            });
          }
          setSubmitting(false);
          values.name = "";
          values.email = "";
          values.plan = "";
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          // handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="">
            <div className="p-2 w-full">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Correo electrónico."
                  name="email"
                  className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-400 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <span className="text-red-400">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div className="md:flex">
              <div className="p-2 md:w-[50%]">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-400 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <span className="text-red-400">
                  {errors.name && touched.name && errors.name}
                </span>
              </div>
              <div className="p-2 md:w-[50%]">
                <div className="relative">
                  <select
                    id="message"
                    name="message"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-3 focus:ring-gray-400 text-lg outline-none text-gray-700 py-[0.50rem] px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.plan}
                  >
                    <option value="" hidden>
                      Selecciona un plan
                    </option>
                    <option value="plan1">Básico</option>
                    <option value="plan2">Avanzado</option>
                    <option value="plan3">Premium</option>
                  </select>
                </div>
                <span className="text-red-400">
                  {errors.plan && touched.plan && errors.plan}
                </span>
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <button
                className="flex w-full md:w-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg gap-2 items-center justify-center"
                type="submit"
                disabled={isSubmitting}
              >
                Enviar
                {/* mostrar un spinner si está enviando sino el icono de enviar */}
                {isSubmitting ? (
                  <svg
                    className="animate-spin -mr-1 ml-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 overflow-visible rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
