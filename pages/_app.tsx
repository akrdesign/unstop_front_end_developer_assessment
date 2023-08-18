import { AddAssessmentProvider } from "@/lib/add-assessment-context";
import "../styles/main.sass";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AddAssessmentProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AddAssessmentProvider>
  );
}
