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

const ContactForm = () => {
  return (
    <div className="shadow-01 overflow-hidden rounded-[1.2rem] bg-[#ffffff] px-[2rem] py-[3rem]">
      <form className="grid grid-cols-2 gap-[1rem] gap-y-[2rem]">
        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="firstname">First Name</Label>
          <Input type="text" name="firstname" />
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="lastname">Last Name</Label>
          <Input type="text" name="lastname" />
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="company">Company</Label>
          <Input type="text" name="company" />
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="email">Email</Label>
          <Input type="text" name="email" />
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="country">Country</Label>

          <Select>
            <SelectTrigger>
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
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <Label htmlFor="phone">Phone</Label>
          <Input type="text" name="phone" />
        </div>

        <div className="col-span-2 flex flex-col gap-[.5rem]">
          <Label htmlFor="contactreason">Contact Reason</Label>
          <Select>
            <SelectTrigger>
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
        </div>

        <div className="col-span-2 flex flex-col gap-[.5rem]">
          <Label htmlFor="message">Message</Label>
          <Textarea />
        </div>

        <button
          type="submit"
          className="col-span-2 flex h-[5rem] w-full items-center justify-center bg-[var(--primary-color)] text-[1.6rem] font-light text-[#ffffff] transition-all duration-300 hover:bg-[var(--secondary-color)]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
