import { useRef, useState } from "react";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

import engineer from  "@/src/assets/img/professional-image.webp"
import newsletter from "@/src/assets/img/email-newsletter.webp"
import caller from "@/src/assets/img/contact-us-icon.png"
import email from "@/src/assets/img/email-icon.png"
import location from "@/src/assets/img/location-pin-icon.png"
import GooglePlay from "@/src/assets/img/google-play.png";
import AppStore from "@/src/assets/img/apple-store.png";

import { ContactUsType, FieldConfig, FieldName, SubscribeType } from "@/types/contact-us";
import { useContactPost } from "@/src/hooks/useContact";
import ToastMessage from "@/src/hooks/toastMessage";
import { useSubscribePost } from "@/src/hooks/useSubscribePost";

const FIELDS: FieldConfig[] = [
  { name: "name", label: "Name" },
  { name: "phone", label: "Phone", type: "tel" },
];

const EMAIL_FIELD: FieldConfig = { name: "email", label: "Email", type: "email" };
const MESSAGE_FIELD: FieldConfig = { name: "message", label: "Message", type: "textarea" };

const validationSubSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
});
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9+\-\s()]{7,15}$/, "Enter a valid phone number")
    .required("Phone is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

function Field({
  config,
  value,
  focused,
  error,
  touched,
  onFocus,
  onBlur,
  onChange,
}: {
  config: FieldConfig;
  value: string;
  focused: boolean;
  error?: string;
  touched?: boolean;
  onFocus: () => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const active = focused || value.length > 0;
  const isTextarea = config.type === "textarea";
  const showError = touched && !!error;

  return (
    <div className="w-full">
      <fieldset
        className={`w-full rounded-xl border px-4 transition-colors ${
            showError
              ? "border-red-400"
              : focused
              ? "border-secondary-blue"
              : "border-slate-200"
          } ${isTextarea ? "pb-3" : ""}`}
      >
        <legend
          className={`px-1 text-xs font-medium text-secondary-blue transition-all duration-150 ${
              showError ? "text-red-500" : "text-secondary-blue"
            } ${
            active ? "ml-1 max-w-50 opacity-100" : "ml-1 max-w-0 overflow-hidden opacity-0"
          }`}
        >
          {config.label}
        </legend>

        {isTextarea ? (
          <textarea
            name={config.name}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={active ? "" : config.label}
            rows={4}
            className="w-full resize-none bg-transparent text-sm text-black placeholder:text-black focus:outline-none"
          />
        ) : (
          <input
            name={config.name}
            type={config.type ?? "text"}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={active ? "" : config.label}
            className="w-full bg-transparent py-3 text-sm text-black placeholder:text-black focus:outline-none"
          />
        )}
      </fieldset>

      {showError && (
        <p className="mt-1 pl-1 text-xs text-red-500">{error}</p>
      )}
    </div>    
  );
}



const ContentContactIndex = () => {
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  const subRef = useRef<HTMLInputElement>(null)

  const formik = useFormik<ContactUsType>({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values: ContactUsType, { resetForm }: FormikHelpers<ContactUsType>) => {
      let {data} = await useContactPost(values)
      resetForm();
      const isSuccess = data=="success"
      ToastMessage(isSuccess?"success":"error", isSuccess?"you have successfully submitted this form":"something occurred with this submission")
    },
  });

  const subscribe = useFormik<SubscribeType>({
    initialValues: {
      email: "",
    },
    validationSchema: validationSubSchema,
    onSubmit: async (values: SubscribeType, { resetForm }: FormikHelpers<SubscribeType>) => {
      let {data} = await useSubscribePost(values)
      subRef.current? subRef.current.value="":''
      resetForm()
      const isSuccess = data=="success"
      ToastMessage(isSuccess?"success":"error", isSuccess?"message successfully sent":"something occurred with this submission")
    },
  });

  const renderField = (config: FieldConfig) => (
    <Field
      key={config.name}
      config={config}
      value={formik.values[config.name]}
      focused={focusedField === config.name}
      error={formik.errors[config.name]}
      touched={formik.touched[config.name]}
      onFocus={() => setFocusedField(config.name)}
      onBlur={(e) => {
        setFocusedField(null);
        formik.handleBlur(e);
      }}
      onChange={formik.handleChange}
    />
  );
  
  return (
    <section className="w-full flex flex-col items-center relative px-4 p-16 sm:px-16 xl:px-28">
      <div className="flex flex-col w-full lg:max-w-[90%] items-center bg-primary-white">
        <div className="flex flex-col w-[90%] md:w-full my-26">
          <h3 id="report" className="font-semibold text-center sm:text-start text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-14 tracking-[2%] text-secondary-orange mb-6.25">GET IN TOUCH</h3>
          <div className="flex flex-col items-center md:items-start md:flex-row justify-between w-full gap-15 rounded-[25px] ">
            <div className="w-full ">
              <form 
              noValidate
              onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-x-4 sm:flex-row">
                  {FIELDS.map(renderField)}
                </div>
                {renderField(EMAIL_FIELD)}
                {renderField(MESSAGE_FIELD)}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-fit rounded-xl tracking-[2%] mt-4 bg-secondary-blue px-10 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-auto w-[90%] md:w-140 my-16 md:my-0">
              <img 
              src={newsletter} 
              alt="newsletter" 
              height={28}
              width={28}
              className="relative w-full h-full object-cover object-top-left"/>
              {/* change back to form */}
              <form noValidate onSubmit={subscribe.handleSubmit} className="absolute flex flex-col -bottom-6 left-1/2 -translate-1/2 w-[85%] gap-2">
                <input type="email" name="email" id="email" placeholder="Email" ref={subRef} onChange={subscribe.handleChange}
                className=" bg-primary-white outline-0 text-sm py-3 px-2 rounded-xl placeholder:text-black placeholder:text-sm" />
                <button type="submit" disabled={subscribe.isSubmitting} className=" w-full rounded-xl tracking-[2%] bg-secondary-blue px-10 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 cursor-pointer">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6.25 lg:gap-11.25 w-full 425xl:w-auto max-w-[90%] md:max-w-full text-[1rem] my-16">
          <div className="flex flex-col justify-between h-full max-h-120.5 w-full max-w-75 lg:max-w-130.75 py-8.5 425xl:py-10.5 px-5 text-primary-white rounded-[15px] bg-secondary-blue">
            <div className="flex self-center items-center w-fit mb-6 lg:mb-10.5 p-2 gap-4">
              <div className=" h-auto w-12 ">
                <img src={caller} alt="contact us" height={28} width={28} className="w-full h-full object-cover " />
              </div>
              <span className=" text-[1rem] font-bold break-all">+23430601026</span>
            </div>
            <div className="flex flex-col h-full gap-2">
              <p className=" font-normal text-sm ">
                Monday to Friday: 8:00am - 5:30pm
              </p>
              <p className=" font-normal text-sm ">
                Saturdays: 8:00am - 5:30pm
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-75 lg:max-w-130.75 py-8.5 425xl:py-10.5 px-5 text-primary-white rounded-[15px] bg-[#B9C0DB] ">
            <div className="flex items-center w-fit mb-6 lg:mb-10.5 p-2 gap-4">
              <div className=" h-auto w-12 ">
                <img src={email} alt="email" height={28} width={28} className="w-full h-full object-cover " />
              </div>
              <span className=" text-[1rem] font-bold break-all">Prohandy@gmail.com</span>
            </div>
            <p className=" font-normal text-sm">
              Have questions or need assistance? Reach out to us, we’re here to help.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-75 lg:max-w-130.75 py-8.5 425xl:py-10.5 px-5 text-primary-white rounded-[15px] sm:col-span-2 sm:mx-auto lg:col-span-1 lg:mx-0 bg-[#5627194D] ">
            <div className="flex items-center w-fit mb-6 lg:mb-10.5 p-2 gap-4">
              <div className=" h-auto w-12 ">
                <img src={location} alt="location" height={28} width={28} className="w-full h-full object-cover " />
              </div>
              <span className=" text-[1rem] font-bold break-all">Location: Lagos. NG</span>
            </div>
            <p className=" font-normal text-sm">
              No 40, Babs-williams close, off san bus stop. Lekki
            </p>
          </div>
        </div>

        {/* map was here previously */}

        <div className="flex justify-center w-full max-w-[90%] my-16 pt-0 lg:pt-16 text-primary-text">
          <div className=" flex flex-col justify-end 425xl:max-w-[80%]">
            <h4 className=" font-semibold self-center text-center sm:text-start sm:self-start text-xl 425xl:text-2xl sm:text-3xl lg:text-[2rem] lg:leading-10 425xl:max-w-[80%] mb-4">Join the network of professionals around you</h4>
            <p className=" sm:max-w-[90%] font-medium text-sm  tracking-tight leading-6 mb-7 ">
              Become part the working class community and find your next client and extra income.
            </p>
            {/* Navigation Buttons */}
            <div className="flex items-center w-fit gap-4">
              <div role="link" className=" flex items-center gap-2 rounded-sm w-fit font-semibold">
                <img src={AppStore} draggable={false} alt="apple store" className="h-8 lg:h-11 w-auto cursor-pointer " onClick={() => alert("Coming soon!")} />
                <img src={GooglePlay} draggable={false} alt="Google play" className="h-8 lg:h-11 w-auto cursor-pointer " onClick={() => alert("Coming soon!")} />
              </div>

              {/* <button 
              className=" text-nowrap text-secondary-blue outline-0 cursor-pointer text-[.625rem] 425xl:text-[.75rem] h-fit font-semibold hover:underline hover:bg-transparent "
              >
                Learn More
              </button> */}
            </div>
          </div>
          <div className="hidden sm:flex h-auto w-[35rem]">
            <img src={engineer} alt="engineer"
            className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentContactIndex