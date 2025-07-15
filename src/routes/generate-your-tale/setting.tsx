import { createFileRoute } from '@tanstack/react-router';
import '../../components/settingRoute.css';

export const Route = createFileRoute('/generate-your-tale/setting')({
  component: Setting,
})

function Setting() {
  return (
    <div id='settingBody'>
      Hello "/generate-your-tale/setting"!
    </div>
  )
}
