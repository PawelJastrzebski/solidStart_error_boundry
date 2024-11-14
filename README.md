# SolidStart - Test Nested Error Boundary

ErrorBoundary not working in nested layouts (using children)
```jsx
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
```

Not working when pass as children
```jsx
export function PageLayout({ children }: { children?: JSXElement }) {

    return (
        <ErrorBoundary fallback={<div>Error PageLayout</div>} >
            {children}
        </ErrorBoundary>
    )
}
```

Works when pass as prop
```jsx
export function PageLayoutWorks({ children }: { children: () => JSXElement }) {

    return (
        <ErrorBoundary fallback={<div>Error PageLayoutWorks</div>} >
            {children()}
        </ErrorBoundary>
    )
}
```