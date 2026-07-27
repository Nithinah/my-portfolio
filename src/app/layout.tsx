import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'

export const metadata = {
  title: "Nithin V | AI & ML Engineer",
  description: "Integrated M.Sc. candidate in Artificial Intelligence & Machine Learning. Proficient in Python, TensorFlow, FastAPI, RAG, and Docker.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <RefreshRedirect />
        {children}
      </body>
    </html>
  );
}