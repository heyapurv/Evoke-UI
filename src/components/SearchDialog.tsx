
import React from "react"
import { Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    } from "./ui/command"
import Link from "next/link"
export default function SearchDialog() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <Link className="cursor-pointer" href={'/evokehome/btn'}> <CommandItem>Button</CommandItem></Link>
          <Link className="cursor-pointer" href={'/evokehome/'}> <CommandItem>Get Started</CommandItem></Link>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
