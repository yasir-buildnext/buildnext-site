
export const metadata = {
  title: "BuildNext",
  description: "Elite software delivery, minus the overhead.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
