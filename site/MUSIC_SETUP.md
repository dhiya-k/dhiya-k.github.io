# Music Player Setup

## Adding Your Music Files

1. Create a `music` folder in the `public` directory:
   ```
   public/
     music/
       song1.mp3
       song2.mp3
       song3.mp3
       cover1.jpg (optional)
       cover2.jpg (optional)
       cover3.jpg (optional)
   ```

2. Add your MP3 files to `/public/music/`

3. Update the playlist in `lib/playlist.ts`:
   ```typescript
   export const playlist: Song[] = [
     {
       id: "1",
       title: "Your Song Title",
       artist: "Artist Name",
       file: "/music/your-song.mp3",
       cover: "/music/your-cover.jpg", // Optional
     },
     // Add more songs...
   ];
   ```

## Features

- **Play/Pause**: Click the center button or press `Space`
- **Next Track**: Click next button or press `→`
- **Previous Track**: Click previous button or press `←`
- **Seek**: Click anywhere on the progress bar
- **Volume**: Use the slider on the right
- **Toggle Player**: Click the floating music icon (bottom left)

## Browser Compatibility

Works with MP3, WAV, OGG, and other HTML5 audio formats.
Autoplay may be blocked by browser policies until user interaction.

## Customization

To change colors, edit the Tailwind classes in `components/music-player.tsx`:
- `bg-accent` - Green accent color
- `bg-panel` - Dark panel background
- `text-muted` - Muted text color
