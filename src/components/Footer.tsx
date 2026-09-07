import { legal, restaurant } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-char-900 bg-char-900 px-5 py-10 text-kraft-100 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-display text-lg tracking-wide text-mustard-400">
            {restaurant.fullName}
          </span>
          <span>
            {restaurant.address.street}, {restaurant.address.postalCode}{" "}
            {restaurant.address.city}
          </span>
          <span>{restaurant.email}</span>
        </div>
        <div className="flex flex-col gap-1 text-char-300 sm:items-end">
          <span>{legal.note}</span>
          <span>
            © {new Date().getFullYear()} {restaurant.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
