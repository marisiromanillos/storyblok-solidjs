import { Component } from 'solid-js';
import { storyblokEditable } from '~/lib/storyblok';

// Import your block components
import { Hero } from './blocks/Hero';
import { TextBlock } from './blocks/TextBlock';
import { ImageBlock } from './blocks/ImageBlock';
// Add more as you create them

const componentMap = {
  'hero': Hero,
  'text_block': TextBlock,
  'image_block': ImageBlock,
  // Map your Storyblok component names to SolidJS components
};

export const StoryblokComponent: Component<{ blok: any }> = (props) => {
  const ComponentToRender = componentMap[props.blok.component];

  if (!ComponentToRender) {
    return (
      <div style="background: #f0f0f0; padding: 20px; margin: 10px;">
        <p>Component "{props.blok.component}" not found</p>
        <pre>{JSON.stringify(props.blok, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div {...storyblokEditable(props.blok)}>
      <ComponentToRender {...props.blok} />
    </div>
  );
};
