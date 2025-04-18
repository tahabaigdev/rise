import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const countryData = [
  {
    name: "United States",
    code: "US",
  },
  {
    name: "Canada",
    code: "CA",
  },
  {
    name: "United Kingdom",
    code: "GB",
  },
  {
    name: "Australia",
    code: "AU",
  },
  {
    name: "China",
    code: "CN",
  },
  {
    name: "India",
    code: "IN",
  },
  {
    name: "Japan",
    code: "JP",
  },
  {
    name: "Germany",
    code: "DE",
  },
  {
    name: "France",
    code: "FR",
  },
  {
    name: "Italy",
    code: "IT",
  },
  {
    name: "Brazil",
    code: "BR",
  },
  {
    name: "Russia",
    code: "RU",
  },
  {
    name: "Mexico",
    code: "MX",
  },
  {
    name: "South Africa",
    code: "ZA",
  },
  {
    name: "South Korea",
    code: "KR",
  },
  {
    name: "Pakistan",
    code: "PK",
  },
];

interface FormDataType {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  contactreason: string;
  message: string;
}

type ErrorType = {
  [K in keyof FormDataType]?: string;
};

type TouchedType = {
  [K in keyof FormDataType]?: boolean;
};

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState<FormDataType>({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    contactreason: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});
  const [touched, setTouched] = useState<TouchedType>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof ErrorType]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (touched[name as keyof TouchedType]) {
      validateField(name as keyof FormDataType, value);
    }
  };

  const handleSelectChange = (name: keyof FormDataType, value: string) => {
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(
      name as keyof FormDataType,
      formData[name as keyof FormDataType],
    );
  };

  const validateField = (fieldName: keyof FormDataType, value: string) => {
    let error = "";

    if (!value.trim()) {
      error = "This field is required";
    } else {
      switch (fieldName) {
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = "Must be valid email. example@yourdomain.com";
          }
          break;
        case "phone":
          if (!/^\d{10,15}$/.test(value)) {
            error = "Must be a valid phone number (10-15 digits).";
          }
          break;
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof FormDataType] = true;
      return acc;
    }, {} as TouchedType);
    setTouched(allTouched);

    // Validate all fields
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key as keyof FormDataType, value);
    });

    // Check if there are any errors
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    try {
      const response = await fetch(
        "https://rise.radixtech.org/submit_form.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(
            formData as unknown as Record<string, string>,
          ).toString(),
        },
      );

      if (response.ok) {
        setSubmitStatus(
          "Thank you for contacting RISE. We will get in touch with you shortly.",
        );
        setFormData({
          firstname: "",
          lastname: "",
          company: "",
          email: "",
          country: "",
          phone: "",
          contactreason: "",
          message: "",
        });
        setErrors({});
        setTouched({});
      } else {
        setSubmitStatus("Form submission failed.");
      }
    } catch {
      setSubmitStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="shadow-01 overflow-hidden rounded-[1.2rem] bg-[#ffffff] px-[2rem] py-[3rem]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-[1rem] gap-y-[2rem]"
      >
        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="firstname">First Name</Label>
          <Input
            value={formData.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="firstname"
            className={`${
              errors.firstname ? "border-[#E50914]" : "border-[#e9e2da]"
            }`}
          />
          {errors.firstname && (
            <span className="text-[1rem] text-[#E50914]">
              {errors.firstname}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            value={formData.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.lastname ? "border-[#E50914]" : "border-[#e9e2da]"
            }`}
            type="text"
            name="lastname"
          />
          {errors.lastname && (
            <span className="text-[1rem] text-[#E50914]">
              {errors.lastname}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="company">Company</Label>
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.company ? "border-[#E50914]" : "border-[#e9e2da]"
            }`}
          />
          {errors.company && (
            <span className="text-[1rem] text-[#E50914]">{errors.company}</span>
          )}
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.email ? "border-[#E50914]" : "border-[#e9e2da]"
            }`}
          />
          {errors.email && (
            <span className="text-[1rem] text-[#E50914]">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="country">Country</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => handleSelectChange("country", value)}
            onOpenChange={(open) => {
              if (!open && !touched.country) {
                setTouched((prev) => ({ ...prev, country: true }));
                validateField("country", formData.country);
              }
            }}
          >
            <SelectTrigger
              className={`${
                errors.country ? "border-[#E50914]" : "border-[#e9e2da]"
              }`}
            >
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countryData.map((item, idx) => (
                <SelectItem key={idx} value={item.code}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && (
            <span className="text-[1rem] text-[#E50914]">{errors.country}</span>
          )}
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.phone ? "border-[#E50914]" : "border-[#e9e2da]"
            }`}
          />
          {errors.phone && (
            <span className="text-[1rem] text-[#E50914]">{errors.phone}</span>
          )}
        </div>

        <div className="col-span-2 flex flex-col gap-[.5rem]">
          <Label htmlFor="contactreason">Contact Reason</Label>
          <Select
            value={formData.contactreason}
            onValueChange={(value) =>
              handleSelectChange("contactreason", value)
            }
            onOpenChange={(open) => {
              if (!open && !touched.contactreason) {
                setTouched((prev) => ({ ...prev, contactreason: true }));
                validateField("contactreason", formData.contactreason);
              }
            }}
          >
            <SelectTrigger
              className={`${
                errors.contactreason ? "border-[#E50914]" : "border-[#e9e2da]"
              }`}
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="requestdemo">Request Demo</SelectItem>
              <SelectItem value="contactsales">Contact Sales</SelectItem>
              <SelectItem value="radixproducts">Radix Products</SelectItem>
              <SelectItem value="technicalsupport">
                Technical Support
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.contactreason && (
            <span className="text-[1rem] text-[#E50914]">
              {errors.contactreason}
            </span>
          )}
        </div>

        <div className="col-span-2 flex flex-col gap-[.5rem]">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.message ? "border-[#E50914]" : "border-[#e9e2da]"
            }`}
          />
          {errors.message && (
            <span className="text-[1rem] text-[#E50914]">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="col-span-2 flex h-[5rem] w-full items-center justify-center bg-[var(--primary-color)] text-[1.6rem] font-light text-[#ffffff] transition-all duration-300 hover:bg-[var(--secondary-color)]"
        >
          Submit
        </button>

        {submitStatus && (
          <p className="mt-4 text-center text-[1.4rem] text-[#000000] sm:col-span-2">
            {submitStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
