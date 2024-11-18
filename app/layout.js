import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar อยู่ตรงนี้ */}
        <main>{children}</main>
      </body>
    </html>
  );
}
