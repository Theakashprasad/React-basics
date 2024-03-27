import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod';

// THIS IS USED IN THE USEFORM HOCK TO GET THE AUTOCOMPLETE (3)
// interface formData {
//   name: string;
//   age: number;
// }

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(3),
});

type formData = z.infer<typeof schema>;

const Form = () => {
  // FOR USEREF 1
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current !== null) person.name = nameRef.current.value;
  //   if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //   console.log(person);
  // };

  // FOR USESTATE 2
  // const [person, setPerson] = useState({ name: "", age: 0 });
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault(), console.log(person);
  // };

  // FOR USEFORM 3
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({resolver: zodResolver(schema)});
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="username" 
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            // USEREF 1
            // ref={nameRef}

            // USESATE 2
            // onChange={(event) =>
            //   setPerson({ ...person, name: event.target.value })
            // }

            {...register("name",)}
            id="username"
            type="text"
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p className="text-red-400">{errors.name.message}</p>
          )}

        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Age
          </label>
          <input
            // USEREF 1
            // ref={ageRef}

            // USESTATE 2
            // onChange={(event) =>
            //   setPerson({ ...person, age: parseInt(event.target.value) })
            // }

            {...register("age",{valueAsNumber:true})}
            id="age"
            type="number"
            placeholder="Age"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
           {errors.age && (
            <p className="text-red-400">{errors.age.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between pt-5">
          <button
          disabled= {!isValid}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
