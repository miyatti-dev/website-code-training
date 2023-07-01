// component
import AppWrapper from "@/components/AppWrapper/index.js";

// style
import "@/styles/destyles.css";
import "@/styles/global.scss";

export const metadata = {
  title: {
    default: "石井花壇 | 温海温泉旅館【公式サイト】",
    template: "%s - 石井花壇 | 温海温泉旅館【公式サイト】",
  },
  description:
    "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。\n伝統的「和」の息づく空間で、至極のひとときをお過ごしください。",
  robots: {
    index: false,
  },
  icons: {
    icon: "/image/logo02.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/image/logo02.png" />
      </head>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
