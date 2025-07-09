import { createAsync } from '@solidjs/router';
import { For } from 'solid-js';
import { storyblokApi } from '~/lib/storyblok';
import { StoryblokComponent } from '~/components/StoryblokComponent';

export default function Home() {
  const story = createAsync(async () => {
    try {
      const { data } = await storyblokApi.get('cdn/stories/home', {
        version: 'draft'
      });
      return data.story;
    } catch (error) {
      console.error('Storyblok error:', error);
      return null;
    }
  });

  return (
    <main>
      {story.loading && <div>Loading...</div>}
      {story() && story().content && (
        <div>
          {/* Render the main content if it has properties */}
          {story().content.title && <h1>{story().content.title}</h1>}
          
          {/* Render all blocks in the body array */}
          {story().content.body && (
            <For each={story().content.body}>
              {(blok) => <StoryblokComponent blok={blok} />}
            </For>
          )}
        </div>
      )}
    </main>
  );
}
