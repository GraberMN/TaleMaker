import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/generate-your-tale/genre')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/generate-your-tale/genre"!</div>
}
