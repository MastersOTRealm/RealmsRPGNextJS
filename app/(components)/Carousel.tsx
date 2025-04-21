'use client'
import { useState } from "react";
import { Database, Tables, Enums } from "@/database.types";



export default function Carousel({ reviews }: {reviews: Array<Database['public']['Tables']['review']>}) {
  const [currentIndex, setCurrentIndex] = useState(0)



}
