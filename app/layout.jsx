import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../config/firebaseConfig";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// import { Provider } from "react-redux";
// import store from "@/redux/store";
import ClientProvider from "@/components/providers/clientProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Home/Footer";
export default async function RootLayout({ children }) {
  const locale = await getLocale(); // Dynamically fetch locale
  const messages = await getMessages(); // Fetch corresponding messages

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-800 bg-white flex flex-col min-h-screen relative`}
      >
        <ClientProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AuthProvider>
                <NavBar />
                <main className="flex-grow">{children}</main> {/* Main Content */}
                <Footer /> {/* Footer */}
                <ToastContainer />
              </AuthProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </ClientProvider>
      </body>
    </html>
  );
}

