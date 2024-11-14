import { Title } from "@solidjs/meta";
import { ErrorBoundary } from "solid-js";
import { CounterThrow, CounterThrowOnMount } from "~/components/Counter";
import { PageLayout, PageLayoutWorks } from "~/components/PageLayout";

export default function Home() {
  return (
    <main>
      <Title>Test Nested Error Boundary</Title>
      <h1>Test Nested Error Boundary</h1>

      {/* OK */}
      <PageLayoutWorks children={() => <CounterThrow />} >
      </PageLayoutWorks>

      {/* OK */}
      <PageLayoutWorks children={() => <CounterThrowOnMount />} >
      </PageLayoutWorks>

      {/* Not working */}
      <PageLayout >
        <CounterThrow />
      </PageLayout>

      {/* Not working */}
      <PageLayout >
        <CounterThrowOnMount />
      </PageLayout>

      {/* Ok */}
      <ErrorBoundary fallback={<div>Error</div>} >
        <CounterThrow />
      </ErrorBoundary>

      {/* Ok */}
      <ErrorBoundary fallback={<div>Error</div>} >
        <CounterThrowOnMount />
      </ErrorBoundary>
    </main>
  );
}
