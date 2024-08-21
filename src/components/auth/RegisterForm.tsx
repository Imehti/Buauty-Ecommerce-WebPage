import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./CardWrapper";
import { RegisterSchema } from "@/schemas";
import { Button } from "../ui/button";
import { register } from "@/actions/register";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { useState, useTransition } from "react";

// interface RegisterFormProps {
//   title: string;
// }

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <>
      <CardWrapper
        headerLable="Create an account"
        backButtonLable="Already have an account?"
        backButtonHref="/login"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border border-gray-300 w-96"
                        type="text"
                        placeholder="john"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border border-gray-300 w-96"
                        type="email"
                        placeholder="example@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border border-gray-300 w-96"
                        type="password"
                        placeholder="******"
                      />
                    </FormControl>
                    <div>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <FormSuccess message={success} />
            <FormError message={error} />
            <Button
              disabled={isPending}
              type="submit"
              className="mt-7 w-full border border-gray-300 text-white bg-green-700 hover:bg-indigo-700"
            >
              Cerate an account
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};

export default RegisterForm;
