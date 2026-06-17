import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";
import {Kbd} from "@/components/ui/kbd";

interface AppSearchProps {
    onClick?: () => void;
}

export const AppSearch = ({ onClick }: AppSearchProps) => {
  return (
      <Button
          onClick={onClick}
          type="button"
          className="group relative flex h-10 w-full max-w-80 items-center gap-2 rounded-full border border-platinum-border bg-background px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Open search command menu"
      >
          <SearchIcon className="size shrink-0 transition-colors group-hover:text-foreground" />
          <span className="flex-1 text-left text-muted-foreground/80 group-hover:text-foreground/90">
              Search
          </span>

          <Kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 bg-platinum-border px-1.5 py-0.5 text-caption font-medium opacity-80 group-hover:opacity-100">
              ⌘K
          </Kbd>
      </Button>
  )
}