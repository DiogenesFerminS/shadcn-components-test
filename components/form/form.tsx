"use client";

import { Controller, useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod/v4";
import { Field, FieldDescription, FieldError, FieldLabel, FieldSeparator, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  username: z
    .string()
    .min(4, "The username must have at least 4 characters")
    .max(20, "The username must have maximum 20 characters"),
  password: z
    .string()
    .min(8, "The password must have at least 8 characters")
    .max(20, "The password must have maximum 20 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export const Form = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Card className="min-w-90">
      <CardHeader>
        <CardTitle>Register Form</CardTitle>
        <CardDescription>
          Register on our app to start enjoying our services
        </CardDescription>
      </CardHeader>

      <FieldSeparator/>

      <CardContent>
        <form onSubmit={form.handleSubmit((data) => console.log(data))}>
          <FieldSet>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Username</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your username"
                    autoComplete="off"
                  />

                  {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}

                  <FieldDescription>
                    Provide a unique username
                  </FieldDescription>

                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({field, fieldState}) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    type="password"
                    autoComplete="off"
                  />

                  {
                    fieldState.invalid && <FieldError errors={[fieldState.error]}/>
                  }

                  <FieldDescription>
                    Provide your secret password
                  </FieldDescription>

                </Field>
              )}
            />
          </FieldSet>

          <Button className="w-full mt-6" variant={"default"} type="submit">Register</Button>
        </form>
      </CardContent>

    </Card>
  );
};
