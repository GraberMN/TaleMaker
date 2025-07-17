import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import '../components/indexRoute.css';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div id='appBody'>
      <div id='hook'>Generate Tales For Your Children Beyond Their Wildest Dreams!</div>
      <div id='genreExamples'>
        <figure id='fantasyExample'>
          <img className='genreExampleImage' />
          <figcaption className='genreExampleCaption'>Fantasy</figcaption>
        </figure>
        <figure id='sciFiExample'>
          <img className='genreExampleImage' />
          <figcaption className='genreExampleCaption'>Science Fiction</figcaption>
        </figure>
        <figure id='actionAdventureExample'>
          <img className='genreExampleImage' />
          <figcaption className='genreExampleCaption'>Action Adventure</figcaption>
        </figure>
      </div>
      <Link to='/generate-your-tale/genre' className='generateYourTaleButton'>Generate Your Tale</Link>
      <div id='hookPt2'>...In 2 Easy Steps</div>
      <div id='step1Title'>1) Customize Your Tale </div>
      <figure id='step1Container'>
        <img id='step1Image' />
        <figcaption className='stepCaption'>Choose the genre, lesson, setting, and characters</figcaption>
      </figure>
      <div id='step2Title'>2) Download Your Finished Creation</div>
      <figure id='step2Container'>
        <img id='step2Image' />
        <figcaption className='stepCaption'>Get the entire 10-page story as a PDF for ONLY $5</figcaption>
      </figure>
      <Link to='/generate-your-tale/genre' className='generateYourTaleButton'>Generate Your Tale</Link>
    </div>
  )
}