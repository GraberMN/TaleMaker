import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/generate-your-tale/characters')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/generate-your-tale/characters"!</div>
}
