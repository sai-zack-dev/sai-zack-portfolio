import ContactForm from "@/components/sections/contact/form";
import SocialLinks from "@/components/sections/contact/social-links";

export default function Contact() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-centerbg-white dark:bg-black sm:items-start">
      {/* Page Content */}
      <div className="flex min-h-screen w-full max-w-7xl items-center justify-center bg-white dark:bg-black sm:items-start mx-auto py-24 h-screen">
        <SocialLinks />
        <ContactForm />
      </div>
    </main>
  );
}