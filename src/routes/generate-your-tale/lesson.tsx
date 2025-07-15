import { createFileRoute } from '@tanstack/react-router';
import '../../components/lessonRoute.css';

export const Route = createFileRoute('/generate-your-tale/lesson')({
  component: Lesson,
})

function Lesson() {
  return (
    <div id='lessonBody'>
      Hello "/generate-your-tale/lesson"!
    </div>
  )
}
