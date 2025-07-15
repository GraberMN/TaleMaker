import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
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
    </div>
  )
}