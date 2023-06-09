import "./globals.css";
import Header from "./Header";
import Provider from "./Provider";

export const metadata = {
  title: "CodeDevOption News",
  description: "Fast Latest News Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className="bg-gray-100  dark:bg-zinc-900 transition-all duration-700">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </Provider>
    </html>
  );
}
