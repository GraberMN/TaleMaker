import { createFileRoute } from '@tanstack/react-router';
import '../../components/charactersRoute.css';

export const Route = createFileRoute('/generate-your-tale/characters')({
    component: Characters,
})

function Characters() {
    return (
        <div id='charactersBody'>
            Hello "/generate-your-tale/characters"!
        </div>
    )
}
