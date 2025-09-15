import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login | EasyHouse",
  description: "Explore more features by logging in",
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <LoginForm/>
    </main>
  )
}
