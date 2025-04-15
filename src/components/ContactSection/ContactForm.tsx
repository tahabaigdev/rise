import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  return (
    <div className="shadow-shadow2 overflow-hidden rounded-[1.2rem] bg-[#ffffff] px-[2rem] py-[3rem]">
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
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
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
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
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
