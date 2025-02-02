import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Bed, Leaf, MapPin } from "lucide-react";
import { albert } from "@/app/ui/fonts";
import Image from "next/image";
import WompiCheckout from "../Wompi/WompiCheckout";
import DatePicker from "@/components/DatePicker";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const reservationFormSchema = z.object({
  firstName: z.string().min(1, "Nombre es requerido"),
  lastName: z.string().min(1, "Apellidos son requeridos"),
  contactNumber: z
    .string()
    .regex(/^\d+$/, "Número de contacto debe ser numérico")
    .min(10, "Debe tener al menos 10 dígitos"),
  reservationDate: z.date({ required_error: "Fecha de reserva es requerida" }),
});

type ReservationFormValues = z.infer<typeof reservationFormSchema>;

export default function ReservationModal({ tour }: { tour: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      reservationDate: new Date(),
    },
    mode: "onChange",
  });

  const { formState: { isValid, errors } } = form;

  const onSubmit = (data: ReservationFormValues) => {
    console.log("Datos de la reserva:", data);
    setIsModalOpen(false);
  };

  const handleWompiOpen = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full group">
          Reservar
          <Leaf className="ml-1 group-hover:fill-mainwhite group-hover:stroke-mainblack" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-auto"
        onInteractOutside={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className={`${albert.className} text-4xl font-bold text-main`}>
            Hacer reserva
          </DialogTitle>
        </DialogHeader>
        <div className="mt-5">
          <h2 className={`${albert.className} text-2xl font-bold text-main`}>
            1. Tus datos
          </h2>
          <span className="text-lg text-mainblack mt-2 block">
            Llena estos datos para poder realizar tu reserva.
          </span>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 grid grid-cols-2 gap-4"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre(s)</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tus nombres" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellidos</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tus apellidos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de contacto</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Número telefónico"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reservationDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3">
                    <FormLabel>Fecha de reserva</FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="reservationDate"
                        render={({ field }) => (
                          <DatePicker
                            selectedDate={field.value}
                            onDateChange={(date) => field.onChange(date)}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-x-10">
          <h2 className={`${albert.className} text-2xl font-bold text-main col-span-full pb-4`}>
            2. Confirmación de tu reserva
          </h2>
          <Image
            src="/experiencesForest.jpg"
            width={500}
            height={350}
            className="h-48 object-cover object-center rounded-lg"
            alt="a"
          />
          <div>
            <div className="flex gap-x-4 items-center">
              <h3 className={`${albert.className} text-xl font-semibold text-gold`}>
                {tour.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <MapPin size={15} />
                {tour.location}
              </div>
            </div>
            <span className="pt-2 block text-sm text-mainblack">
              {tour.description}
            </span>
            <span className="pt-3 block">Incluye:</span>
            <div>
              <Bed />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className={`${albert.className} text-2xl font-bold text-main col-span-full pb-4`}>
            3. Pago
          </h2>
          <Table>
            <TableBody className="divide-y divide-gray-200 text-lg">
              <TableRow>
                <TableCell className="font-medium">Subtotal</TableCell>
                <TableCell className="text-right">
                  ${tour.price.toLocaleString()} COP
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Impuestos</TableCell>
                <TableCell className="text-right">
                  ${(tour.price * 0.19).toLocaleString()} COP
                </TableCell>
              </TableRow>
              <TableRow className="text-2xl font-semibold">
                <TableCell className="pt-8">Total</TableCell>
                <TableCell className="text-right pt-8">
                  ${(tour.price * 1.19).toLocaleString()} COP
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-5 flex justify-end w-full gap-x-4">
          <DialogClose asChild>
            <Button variant="destructive" className="h-full">
              Cancelar
            </Button>
          </DialogClose>
          <div className={`${!isValid ? 'opacity-50 pointer-events-none' : ''}`}>
            <WompiCheckout 
              amountInCents={tour.price * 1.19} 
              onOpen={handleWompiOpen}
            />
          </div>
        </div>
        {
          !isValid && (
            <DialogDescription className="text-gray-500 mt-4">
              Por favor, llena todos los campos correctamente para proceder con el pago.
            </DialogDescription>
          )
        }
      </DialogContent>
    </Dialog>
  );
}