import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import OpenAI from 'openai';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  
  return (
    <div id='appBody'>

    </div>
  )
}