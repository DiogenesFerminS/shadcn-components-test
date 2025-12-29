"use client";

import { formSchema } from "@/app/dashboard/form/form.schema";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

export const CustomForm = () => {

  const {register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Enviando datos...")
    reset();
  })
  return (
    <Card className="w-fit md:w-105">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Register on our platform to access our services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-200 rounded-lg py-1 px-2 outline-none"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-600 capitalize text-sm">
                {errors.name.message as string}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-200 rounded-lg py-1 px-2 outline-none"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-600 capitalize text-sm">
                {errors.email.message as string}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-200 rounded-lg py-1 px-2 outline-none"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-600 capitalize text-sm">
                {errors.password.message as string}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full bg-gray-200 rounded-lg py-1 px-2 outline-none"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-600 capitalize text-sm">
                {errors.confirmPassword.message as string}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block mb-1 text-sm">
              Date of birth:
            </label>
            <input
              id="dateOfBirth"
              type="date"
              placeholder="Enter your date of birth"
              className="w-full bg-gray-200 rounded-lg py-1 px-2 outline-none"
              {...register("date", {valueAsDate: true})}
            />
            {errors.date && (
              <span className="text-red-600 capitalize text-sm">
                {errors.date.message as string}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="country" className="block mb-1 text-sm">
              Country:
            </label>
            <select
              {...register("country")}
            >
              <option value="">Country</option>
              <option value="mx">Mexico</option>
              <option value="co">Colombia</option>
              <option value="ar">Argentina</option>
            </select>

            {errors.country && (
              <span className="text-red-600 capitalize text-sm block">
                {errors.country.message as string}
              </span>
            )}
          </div>

          {watch("country") === "ar" && (
            <>
              <div>
                <label htmlFor="city" className="block mb-1 text-sm">
                  City:
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  className="w-full bg-gray-200 rounded-lg py-1 px-2 outline-none"
                  {...register("city", {
                    required: {
                      value: true,
                      message: "City is required",
                    }
                  })}
                />
                {errors.city && (
                  <span className="text-red-600 capitalize text-sm">
                    {errors.city.message as string}
                  </span>
                )}
              </div>
            </>
          )}

          <div>
            <label htmlFor="file" className="block mb-1 text-sm">
              Foto de perfil:
            </label>
            <input
              id="file"
              type="file"
              className="w-full bg-gray-200 rounded-lg py-1 px-2  outline-none"
              onChange={(e) => {
                setValue('userPhoto', e.target.files![0].name)
              }}
            />
          </div>

          <div className="flex flex-col gap-4 justify-center items-start">
            <div>
                <input
                {...register("terms", {
                  required: {
                    value: true,
                    message: "You must accept the terms for continue"
                  },
                  validate: (value) => {
                    return !value 
                    ? "You must accept the terms for continue" 
                    : true}
                })}
                type="checkbox"
                />
                <span className="ml-2">Accept terms and conditions </span>
            </div>
            

            {errors.terms && (
              <span className="text-red-600 capitalize text-sm block">
                {errors.terms.message as string}
              </span>
            )}

          </div>

          <Button variant={"default"} type="submit">
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
