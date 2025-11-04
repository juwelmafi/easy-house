"use client";

import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HouseForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("/api/houses", data);
      alert("House added successfully!");
      reset(); // clear the form
    } catch (error) {
      console.error(error);
      alert("Something went wrong while adding the house.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mt-20 max-w-4xl mx-auto p-10 bg-white dark:bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Luxury Villa In Los Angeles"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500 text-sm">Title is required</span>
          )}
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="8433 Sunset Blvd, Los Angeles"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">Address is required</span>
          )}
        </div>

        {/* Price */}
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            placeholder="$1,250,000"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">Price is required</span>
          )}
        </div>

        {/* Image */}
        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            placeholder="https://i.ibb.co/0jR9wWb/house1.jpg"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500 text-sm">Image URL is required</span>
          )}
        </div>

        {/* Beds */}
        <div>
          <Label htmlFor="beds">Beds</Label>
          <Input
            id="beds"
            type="number"
            placeholder="3"
            {...register("beds", { required: true, min: 1 })}
          />
          {errors.beds && (
            <span className="text-red-500 text-sm">Beds are required</span>
          )}
        </div>

        {/* Baths */}
        <div>
          <Label htmlFor="baths">Baths</Label>
          <Input
            id="baths"
            type="number"
            placeholder="2"
            {...register("baths", { required: true, min: 1 })}
          />
          {errors.baths && (
            <span className="text-red-500 text-sm">Baths are required</span>
          )}
        </div>

        {/* Area */}
        <div>
          <Label htmlFor="area">Area</Label>
          <Input
            id="area"
            placeholder="900 SqFt"
            {...register("area", { required: true })}
          />
          {errors.area && (
            <span className="text-red-500 text-sm">Area is required</span>
          )}
        </div>

        {/* Country */}
        <div className="w-full">
          <Label htmlFor="country">Country</Label>
          <Controller
            name="country"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange} // <-- make sure it calls onChange with the string
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.country && (
            <span className="text-red-500 text-sm">Country is required</span>
          )}

          {errors.country && (
            <span className="text-red-500 text-sm">Country is required</span>
          )}
          {errors.country && (
            <span className="text-red-500 text-sm">Country is required</span>
          )}
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full mt-4 bg-orange-500 text white">
        Add House
      </Button>
    </form>
  );
}
