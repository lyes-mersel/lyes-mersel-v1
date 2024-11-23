"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+213) 783 31 05 46",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dev.mersel@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Bejaia, Algeria",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: number; message: string }>({
    ok: 0,
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    subject: false,
    message: false,
  });

  // validate required fields
  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName,
      email: !formData.email,
      subject: !formData.subject,
      message: !formData.message,
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  // handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  // handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ ok: 400, message: "Please fill all the required fields" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ ok: 0, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ ok: response?.status, message: result?.message });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ ok: response?.status, message: result?.error });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ ok: 400, message: "Error sending message." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[65%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="w-full text-4xl text-accent">
                Let’s Create Something Great Together
              </h3>
              <p className="text-white/60 text-left xs:text-justify">
                Have a project in mind or need help turning your ideas into
                reality? I’m here to collaborate and bring your vision to life.
                Reach out, and let’s get started!
              </p>
              {/* inputs */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`${errors.firstName && "border-error"}`}
                />
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`${errors.email && "border-error"}`}
                />
                <Input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="The Subject"
                  className={`md:col-span-2 ${
                    errors.subject && "border-error"
                  }`}
                />
              </div>
              {/* textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tap your message here"
                className={`h-[200px] ${errors.message && "border-error"}`}
              />
              {/* Submit Btn & message */}
              <div className="flex justify-between items-center">
                {status.ok !== 0 ? (
                  <p
                    className={status.ok === 200 ? "text-accent" : "text-error"}
                  >
                    {status.message}
                  </p>
                ) : (
                  <span></span>
                )}
                <Button
                  type="submit"
                  size="sm"
                  className="max-w-40"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <span className="text-[26px]">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
