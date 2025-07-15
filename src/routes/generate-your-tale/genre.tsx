import { createFileRoute } from '@tanstack/react-router';
import '../../components/genreRoute.css';

export const Route = createFileRoute('/generate-your-tale/genre')({
  component: Genre,
})

function Genre() {
  return (
    <div id='genreBody'>
      Hello "/generate-your-tale/genre"!
    </div>
  )
}
