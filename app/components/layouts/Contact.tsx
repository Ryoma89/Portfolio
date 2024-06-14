"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Title from "../elements/Title";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast"


const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  content: z.string().min(2).max(500),
});

const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

const Contact = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append(`entry.${process.env.NEXT_PUBLIC_NAME_ENTRY_ID}`, values.name);
    formData.append(`entry.${process.env.NEXT_PUBLIC_EMAIL_ENTRY_ID}`, values.email);
    formData.append(`entry.${process.env.NEXT_PUBLIC_CONTENT_ENTRY_ID}`, values.content);

    if (!googleFormUrl) {
      console.error("Google Form URL is not defined.");
      return;
    }

    fetch(googleFormUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }).then(() => {
      toast({
        title: "✅ Success!!",
        description: "Thank you for your message!!",
      })
      form.reset();
    }).catch((error) => {
      toast({
        title: "❌ Failed!!",
        description: error,
      })
      form.reset();
    });
  }


  return (
    <section className="px-10 py-14 md:py-20 xl:py-32" id="Contact">
      <div className="xl:w-[1000px] xl:mx-auto">
        <Title title="Contact" />
        <div className="mt-10 sm:w-4/5 sm:mx-auto md:w-3/5 xl:mt-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRQ-NPSU8nrbKrpC45qWqeFdgsPzmxqIbk7jTc9WRH2G1MyQ/formResponse">
              {/* name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-lg xl:text-xl">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-lg xl:text-xl">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* content */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-lg xl:text-xl">
                      Content
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please enter your message content here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-[90px] mx-auto sm:w-[110px] lg:w-[150px] xl:w-[250px]">
                <Button
                  type="submit"
                  className="w-[90px] h-auto bg-blue-500 hover:bg-blue-700 sm:w-[110px] lg:w-[150px] xl:w-[250px] xl:text-xl xl:mt-5 xl:py-2"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
