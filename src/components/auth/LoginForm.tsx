import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./CardWrapper";
import { LoginSchema } from "@/schemas";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { login } from "@/actions/login";

interface LoginFormProps {
  title: string;
}

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    setIsPending(true); // Set isPending to true when the submission starts
    login(values)
      .then((data) => {
        console.log(data);
        if (data?.error) {
          setError(data.error);
        } else if (data?.success) {
          setSuccess(data.success);
        }
      })
      .finally(() => {
        setIsPending(false); // Set isPending to false when the submission is done
      });
  };
  return (
    <>
      <CardWrapper
        headerLable="Welcome back!"
        backButtonLable="Don't have an account?"
        backButtonHref="/register"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4 mb-4">
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
                        placeholder="*****"
                      />
                    </FormControl>
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
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};

export default LoginForm;
