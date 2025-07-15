import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import OpenAI from 'openai';
import '../components/testRoute.css';

export const Route = createFileRoute('/test')({
    component: Test,
});

function Test() {
    const prompt = useRef('');
    const outputtedStoryBoxRef = useRef<HTMLTextAreaElement | null>(null);
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });
    const generateStory = async () => {
        if (prompt.current === null || prompt.current.trim() === '') {
            alert('No story synopsis provided. Please try again.');
            return;
        }
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-4',
                messages: [
                    {
                        role: 'user', content: `Write a children's story about: ${prompt.current}`
                    }
                ],
            });
            if (response.choices[0].message.content !== null && outputtedStoryBoxRef.current !== null) {
                outputtedStoryBoxRef.current.value = response.choices[0].message.content;
            }
        }
        catch (error) {
            alert('Error generating story. Please try again.');
        }
    }
    return (
        <div id='testBody'>
            <h1>Tale Maker</h1>
            <label htmlFor='outputtedStoryBox' id='outputtedStoryBoxLabel'>Generated story:</label>
            <textarea id='outputtedStoryBox' rows={10} cols={60} ref={outputtedStoryBoxRef} name='outputtedStoryBox' placeholder='Once upon a time...' readOnly></textarea>
            <label htmlFor='storyInputBox' id='storyInputBoxLabel'>Enter story synopsis here:</label>
            <textarea onChange={(e) => prompt.current = e.target.value} id='storyInputBox' rows={5} cols={40} name='storyInputBox' placeholder='Characters? Setting? Plot?' required></textarea>
            <button onClick={() => generateStory()} id='submitSynopsisButton'>Submit</button>
        </div>
    )
}