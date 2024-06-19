import { Formik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

const Formulario = () => {
  const app_form_url = import.meta.env.VITE_APP_FORM_URL;
  const form_url = import.meta.env.VITE_FORM_URL;
  const name_entry = import.meta.env.VITE_NAME_ENTRY;
  const email_entry = import.meta.env.VITE_EMAIL_ENTRY;
  const plan_entry = import.meta.env.VITE_PLAN_ENTRY;
  return (
    <div className="flex p-2 md:w-[50%] flex-col md:p-4 gap-4 h-[70%] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <p className="text-center text-2xl font-bold">
        FORMULARIO DE PREINSCRIPCIÓN
      </p>
      <Formik
        className=""
        initialValues={{ name: "", email: "", plan: "" }}
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

          params.append("FORM_URL", form_url);
          try {
            await axios.post(app_form_url, params);
            toast.success("Mensaje enviado! 🤩📈", { duration: 2500 });
          } catch (error) {
            console.error(error);
            toast.error("No se ha podido enviar el mensaje 😥", {
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
          <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center gap-4">
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
            <div className="flex flex-col md:flex-row gap-4">
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
                    id="plan"
                    name="plan"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-3 focus:ring-gray-400 text-lg outline-none text-gray-700 py-[0.5rem] px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.plan}
                  >
                    <option value="" hidden>
                      Selecciona un plan
                    </option>
                    <option value="Básico">Básico</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>
                <span className="text-red-400">
                  {errors.plan && touched.plan && errors.plan}
                </span>
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <button
                className="flex w-full md:w-auto text-white bg-[#2d91d4] border-0 py-2 px-8 focus:outline-none hover:bg-[#42a6e9] rounded text-lg gap-2 items-center justify-center"
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
                  <></>
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
