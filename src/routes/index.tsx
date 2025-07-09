import { createFileRoute } from '@tanstack/react-router';
import OpenAI from 'openai';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'lightgrey', margin: 'auto' }}>
      
    </div>
  )
}