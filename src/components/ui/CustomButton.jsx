import React from 'react'
import { Button } from '../../components/ui/button'

export default function CustomButton({title,w="w-full",ariaLabel="back"}) {
 
  
  return (
    <Button className={`p-6 font-bold  hover:bg-background hover:text-foreground border-2 border-primary text-md rounded-none ${w}`} aria-label={ariaLabel}>{title}</Button>
  )
}
