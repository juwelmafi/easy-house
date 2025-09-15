import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "Register | EasyHouse",
  description: "Be a part to our platform",
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <RegisterForm />
    </main>
  )
}
