import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "invalid fields" };

  const { password, email } = validatedFields.data;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return { user, success: "Login successfully", error: null };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: errorMessage };
  }
};
