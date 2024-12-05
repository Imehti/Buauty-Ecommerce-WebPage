import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./CardWrapper";
import { LoginSchema } from "@/schemas";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentUser from "@/atom/currentUser";
import { User } from "firebase/auth";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { login } from "@/actions/login";
import { useState } from "react";

// interface LoginFormProps {
//   title: string;
// }

const LoginForm = () => {
  const [status, setStatus] = useState<{ error?: string; success?: string; isPending: boolean }>({
    error: undefined,
    success: undefined,
    isPending: false,
  });
  
  const [, setUser] = useRecoilState<User | null>(currentUser);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setStatus({ error: "", success: "", isPending: true });
    try {
      const data = await login(values);
      if (data?.error) {
        setStatus((prev) => ({ ...prev, error: data.error }));
      } else if (data?.success) {
        setStatus((prev) => ({ ...prev, success: data.success }));
        setUser(data.user);  // Update Recoil state
  
        // Extract only serializable data
        const userDataToStore = {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
        };
  
        try {
          localStorage.setItem("user", JSON.stringify(userDataToStore));  // Sync with localStorage
        } catch (error) {
          console.error("Error storing user data in local storage:", error);
        }
  
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setStatus((prev) => ({ ...prev, isPending: false }));
    }
  };
  

  return (
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
          <FormSuccess message={status.success} />
          <FormError message={status.error} />
          <Button
            disabled={status.isPending}
            type="submit"
            className="mt-7 w-full border border-gray-300 text-white bg-green-700 hover:bg-indigo-700"
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
