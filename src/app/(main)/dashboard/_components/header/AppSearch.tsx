import {ButtonGroup} from "@/components/ui/button-group";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";

export const AppSearch = () => {
  return (
      <div className="flex items-center gap-2">
              <Button
                  variant="ghost"
                  className="bg-amethyst-accent rounded-full"
                  aria-label="Search"
              >
                  <SearchIcon />
              </Button>
          <Input aria-label="Search" placeholder="Search..." className="border-[0.5px] rounded-full w-120 max-w-full px-4"/>
      </div>
  )
}