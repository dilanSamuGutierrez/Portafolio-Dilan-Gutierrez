import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-xl">
        
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon
                    className="
                      rounded-2xl cursor-pointer size-full bg-background 
                      text-muted-foreground border border-border 
                      transition-colors duration-200

                      hover:text-[#3e5b99] 
                      dark:hover:text-[#F6E9B2]
                      hover:bg-muted
                    "
                  >
                    <item.icon className="size-full object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>

              <TooltipContent side="top" sideOffset={8}>
                <p>{item.label}</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;

            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon
                      className="
                        rounded-2xl cursor-pointer size-full bg-background 
                        text-muted-foreground border border-border 
                        transition-colors duration-200

                        hover:text-[#3e5b99] 
                        dark:hover:text-[#F6E9B2]
                        hover:bg-muted
                      "
                    >
                      <IconComponent className="size-full object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>

                <TooltipContent side="top" sideOffset={8}>
                  <p>{name}</p>
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>
            );
          })}

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon
              className="
                rounded-2xl cursor-pointer size-full bg-background 
                text-muted-foreground border border-border 
                transition-colors duration-200

                hover:text-[#3e5b99] 
                dark:hover:text-[#F6E9B2]
                hover:bg-muted
              "
            >
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>

          <TooltipContent side="top" sideOffset={8}>
            <p>Tema</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>

      </Dock>
    </div>
  );
}