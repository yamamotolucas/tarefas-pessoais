import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarefas Pessoais",
  description: "Suas tarefas em um só lugar.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  colorScheme: "light"
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
