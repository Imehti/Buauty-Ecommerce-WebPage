import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "invalid fields" };

  const { password, email } = validatedFields.data;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return { user, success: "User created successfully", error: null };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
};
