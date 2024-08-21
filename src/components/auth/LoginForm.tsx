import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./CardWrapper";
import { LoginSchema } from "@/schemas";
import { Button } from "../ui/button";

interface LoginFormProps {
  title: string;
}

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
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
            <div className="space-y-4">
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
            <Button
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
