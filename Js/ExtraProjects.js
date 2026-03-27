function projects() {
  return {
    activeLang: null,
    activeFramework: null,

    allProjects: [
            {
        name: 'V-CONSOLE',
        short: 'V-CON',
        icon: '🖥️',
        desc: 'Custom virtual game console with GPU framebuffer, RGB565 color encoding, VRAM, RAM, ROM architecture and custom CPU in C#. A complete custom computing platform.',
        tags: ['C#', 'WinForms', 'GPU', 'RGB565', 'Emulation'],
        git:"https://github.com/cyd-n/V-console" }, 
        {
        name: 'QIBYTE VM',
        short: 'QB',
        icon: '⚙️',
        desc: 'Stack-based virtual machine with custom instruction set and bytecode. Implements Forth-like semantics with full arithmetic, stack manipulation and planned binary format.',
        tags: ['C#', 'VM', 'Bytecode', 'Compiler Theory'],
        git:"https://github.com/cyd-n/QiByte" }, 
        {
        name: 'ATHENA AI',
        short: 'AI',
        icon: '🤖',
        desc: 'Configurable AI assistant with dynamic prompt engineering, persistent settings, TTS integration and retro terminal UI. Supports multiple AI personalities and Gemini models.',
        tags: ['JavaScript', 'Alpine.js', 'Gemini API', 'TTS', 'Prompt Engineering', 'AI'],
        git:"https://github.com/cyd-n/Athena" },
      {
        name: 'IDE',
        short: 'IDE',
        icon: '💻',
        desc: 'Lightweight multi-language desktop IDE built in one day. Supports 8 languages with real compiler integration, colored error output and temp project management.',
        tags: ['C#', 'WinForms', 'Process API', '8 Languages'],
        git:"https://github.com/cyd-n/IDE" },
      {
        name: 'BROWSER COMPILER',
        short: 'COMP',
        icon: '🔧',
        desc: 'In-browser code runner supporting JavaScript, TypeScript, Lua, Ruby and Markdown using real language runtimes. Features console.log capture and download.',
        tags: ['JavaScript', 'Alpine.js'],
        git:"https://github.com/cyd-n/Online-compiler" },
      {
        name: 'WEATHER DASHBOARD',
        short: 'WTH',
        icon: '🌤️',
        desc: 'Weather app with hourly Chart.js temperature graphs, air quality data, astronomy info and 3-day forecast. Built with WeatherAPI.',
        tags: ['JavaScript', 'Chart.js', 'Alpine.js', 'REST API'],
        git:"https://github.com/cyd-n/weather-app/tree/main" },
      {
        name: 'PIXEL ART MAKER',
        short: 'PIX',
        icon: '🎨',
        desc: 'Browser-based pixel art tool using Canvas API with draw/erase modes, customizable grid size, background color and PNG download.',
        tags: ['JavaScript', 'Canvas API', 'Alpine.js'],
        git:"https://github.com/cyd-n/Pixel-art-paint" },
      {
        name: 'CPU EMULATOR',
        short: 'CPU',
        icon: '🔲',
        desc: 'Custom register-based CPU emulator with fetch/decode cycle, memory mapping, CPU flags (Zero, Carry, Negative, Overflow) and hex memory dump.',
        tags: ['C#', 'CPU', 'Emulation', '6502'],
        git:"https://github.com/cyd-n/CPU-EMU" },
      {
        name: 'Painters-Hel',
        short: 'ph',
        icon: '🟦',
        desc: 'Custom binary image format renderer using Unicode block characters and ConsoleColor. Supports foreground/background color layers and custom file format with Unicode delimiters.',
        tags: ['C#', 'Console', 'Custom Format', 'Graphics'],
        git:"https://github.com/cyd-n/Painters-Hel"
       },
      {
        name: 'Mail',
        short: 'Mail',
        icon: '💻',
        desc: 'Custom Email Protocol A custom email system built on raw TCP sockets with a self-designed text protocol inspired by SMTP. The server parses protocol commands and persists emails to file. A Tkinter GUI provides a user-friendly interface for composing and sending. Demonstrates how real email protocols work under the hood.',
        tags: ['Python', 'tKinter', 'Web Sockets', 'Mail', 'Custom Protocol', 'TCP Sockets'],
        git:"https://github.com/cyd-n/Mail-System" },
        {
        name: 'VPET',
        short: 'VPET',
        icon: '💻',
        desc: 'Browser Tamagotchi Game A fully playable Tamagotchi-style virtual pet game rendered in a GameBoy-style browser shell. Uses the Canvas API for all rendering, a stat system with time-based decay, an inventory with Food and Toy classes, D-pad controls, and async timed actions for sleep and bath states. Includes a game over screen.',
        tags: ['JavaScript', 'Canvas API', 'Asynce', 'Alpine.js'],
        git:"https://github.com/cyd-n/VPet" },
        {
        name: 'Video Streaming Backend',
        short: 'VSB',
        icon: '💻',
        desc: 'A PHP backend for video streaming that implements the HTTP Range request protocol — the same mechanism used by YouTube and Netflix for video seeking and buffering. Parses the Range header, calculates byte offsets, and streams video in chunks. Also includes a thumbnail API and a full JSON metadata endpoint.',
        tags: ['PHP', 'MySQL', 'HTTP Range Requests'],
        git:"https://github.com/cyd-n/VideoSite" },
        {
        name: 'MusicCoreT — NuGet Library',
        short: 'MCT',
        icon: '🔲',
        desc: 'A packaged NuGet library for playing music in console and text-based games. Provides a clean API with note, playlist, and player classes. Playback runs on a background thread so the game loop is never blocked. Supports 3 octaves across all 7 notes with method overloading for flexible use.',
        tags: ['C#', 'NuGet', 'Music'],
        git:"https://github.com/cyd-n/MusicCoreT" },
        {
        name: 'logic gate mobile game',
        short: 'MCT',
        icon: '🔲',
        desc: 'A packaged NuGet library for playing music in console and text-based games. Provides a clean API with note, playlist, and player classes. Playback runs on a background thread so the game loop is never blocked. Supports 3 octaves across all 7 notes with method overloading for flexible use.',
        tags: ['C#', 'Unity', 'Andriod'],
        git:"https://github.com/cyd-n/LogicGate-Mobile-Game" },
    ],

    // Auto-generated unique language and framework filters
    get langs() {
      const langSet = ['C#', 'JavaScript', 'TypeScript', 'Python', 'Lua', 'Ruby', 'C++', 'C', 'Rust', 'PHP'];
      return langSet.filter(l => this.allProjects.some(p => p.tags.includes(l)));
    },

    get frameworks() {
      const fwSet = ['Alpine.js', 'WinForms', 'Chart.js', 'tKinter', '.NET', 'Unity', 'Godot'];
      return fwSet.filter(f => this.allProjects.some(p => p.tags.includes(f)));
    },

    get filtered() {
      return this.allProjects.filter(p => {
        if (this.activeLang) return p.tags.includes(this.activeLang);
        if (this.activeFramework) return p.tags.includes(this.activeFramework);
        return true;
      });
    },
  }
}