import { createFileRoute } from '@tanstack/react-router';
import '../components/aboutUsRoute.css';

export const Route = createFileRoute('/about-us')({
  component: AboutUs,
})

function AboutUs() {
  return (
    <div id='aboutUsBody'>
      Hello "/about-us"!
    </div>
  )
}
