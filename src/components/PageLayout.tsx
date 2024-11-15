import { ErrorBoundary, JSXElement } from "solid-js";

export function PageLayout(props: { children?: JSXElement }) {

    return (
        <ErrorBoundary fallback={<div>Error PageLayout</div>} >
            {props.children}
        </ErrorBoundary>
    )
}


export function PageLayoutWorks({ children }: { children: () => JSXElement }) {

    return (
        <ErrorBoundary fallback={<div>Error PageLayoutWorks</div>} >
            {children()}
        </ErrorBoundary>
    )
}