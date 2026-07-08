function projects() {
  return {
    activeLang: null,
    activeFramework: null,

    allProjects: [
            {
        name: 'V-CONSOLE',
        short: 'V-CON',
        img: '🖥️',
        desc: 'Custom virtual game console with GPU framebuffer, RGB565 color encoding, VRAM, RAM, ROM architecture and custom CPU in C#. A complete custom computing platform.',
        tags: ['C#', 'WinForms', 'GPU', 'RGB565', 'Emulation'],
        state: "Canceled do to i use linux now and WinForm don't work on linux",
        date: "2026",
        liveDemo: false,
        liveDemoUrl: "",
        git:"https://github.com/cyd-n/V-console" }, 
        {
        name: 'QIBYTE VM',
        short: 'QB',
        img: 'Imgs/TERMINAL.png',
        desc: 'Stack-based virtual machine with custom instruction set and bytecode. Implements Forth-like semantics with full arithmetic, stack manipulation and planned binary format.',
        tags: ['C#', 'VM', 'Bytecode', 'Compiler Theory'],
        state: "In waitlist",
        date: "2025",
        liveDemo: false,
        liveDemoUrl: "",
        git:"https://github.com/cyd-n/QiByte" }, 
        {
        name: 'Altair AI',
        short: 'AI',
        img: 'Imgs/Altair.png',
        desc: 'Configurable AI assistant with dynamic prompt engineering, persistent settings, TTS integration and retro terminal UI. Supports multiple AI personalities and Gemini models.',
        tags: ['JavaScript', 'Alpine.js', 'Gemini API', 'TTS', 'Prompt Engineering', 'AI'],
        state: "Waitlist",
        date: "2026",
        liveDemo: true,
        liveDemoUrl: "https://cyd-n.github.io/Altair/",
        git:"https://github.com/cyd-n/Athena" },
      {
        name: 'IDE',
        short: 'IDE',
        img: '',
        desc: 'Lightweight multi-language desktop IDE built in one day. Supports 8 languages with real compiler integration, colored error output and temp project management.',
        tags: ['C#', 'WinForms', 'Process API', '8 Languages'],
        state: "Canceled do to i use linux now and WinForm don't work on linux",
        date: "2025",
        liveDemo: false,
        liveDemoUrl: "",
        git:"https://github.com/cyd-n/IDE" },
      {
        name: 'BROWSER COMPILER',
        short: 'COMP',
        img: 'Imgs/Compiler.png',
        desc: 'In-browser code runner supporting JavaScript, TypeScript, Lua, Ruby and Markdown using real language runtimes. Features console.log capture and download.',
        tags: ['JavaScript', 'Alpine.js'],
        state: "Done for now",
        date: "2025",
        liveDemo: true,
        liveDemoUrl: "https://compiler.cyd-n.nl/",
        git:"https://github.com/cyd-n/Online-compiler" },
      {
        name: 'WEATHER DASHBOARD',
        short: 'WTH',
        img: 'Imgs/Weather.png',
        desc: 'Weather app with hourly Chart.js temperature graphs, air quality data, astronomy info and 3-day forecast. Built with WeatherAPI.',
        tags: ['JavaScript', 'Chart.js', 'Alpine.js', 'REST API'],
        state: "Done for now",
        date: "2025",
        liveDemo: true,
        liveDemoUrl: "https://cyd-n.github.io/weather-app/",
        git:"https://github.com/cyd-n/weather-app/tree/main" },
      {
        name: 'PIXEL ART MAKER',
        short: 'PIX',
        img: 'Imgs/PixalArt.png',
        desc: 'Browser-based pixel art tool using Canvas API with draw/erase modes, customizable grid size, background color and PNG download.',
        tags: ['JavaScript', 'Canvas API', 'Alpine.js'],
        state: "Done for now",
        date: "2025",
        liveDemo: true,
        liveDemoUrl: "https://cyd-n.github.io/Pixel-art-paint/",
        git:"https://github.com/cyd-n/Pixel-art-paint" },
      {
        name: 'CPU EMULATOR',
        short: 'CPU',
        img: 'Imgs/TERMINAL.png',
        desc: 'Custom register-based CPU emulator with fetch/decode cycle, memory mapping, CPU flags (Zero, Carry, Negative, Overflow) and hex memory dump.',
        tags: ['C#', 'CPU', 'Emulation', '6502'],
        state: "In waitlist",
        date: "2025",
        liveDemo: false,
        liveDemoUrl: "",
        git:"https://github.com/cyd-n/CPU-EMU" },
      {
        name: 'Painters-Hel',
        short: 'ph',
        img: 'Imgs/Paint.png',
        desc: 'Custom binary image format renderer using Unicode block characters and ConsoleColor. Supports foreground/background color layers and custom file format with Unicode delimiters.',
        tags: ['C#', 'Console', 'Custom Format', 'Graphics'],
        state: "Done for now",
        date: "2024",
        liveDemo: true,
        liveDemoUrl: "https://cydngames.itch.io/painters-hell",
        git:"https://github.com/cyd-n/Painters-Hel"
       },
      {
        name: 'Mail',
        short: 'Mail',
        img: '💻',
        desc: 'Custom Email Protocol A custom email system built on raw TCP sockets with a self-designed text protocol inspired by SMTP. The server parses protocol commands and persists emails to file. A Tkinter GUI provides a user-friendly interface for composing and sending. Demonstrates how real email protocols work under the hood.',
        tags: ['Python', 'tKinter', 'Web Sockets', 'Mail', 'Custom Protocol', 'TCP Sockets'],
        state: "Done for now",
        date: "2024",
        liveDemo: false,
        liveDemoUrl: "",
        git:"https://github.com/cyd-n/Mail-System" },
        {
        name: 'VPET',
        short: 'VPET',
        img: 'Imgs/VPet.png',
        desc: 'Browser Tamagotchi Game A fully playable Tamagotchi-style virtual pet game rendered in a GameBoy-style browser shell. Uses the Canvas API for all rendering, a stat system with time-based decay, an inventory with Food and Toy classes, D-pad controls, and async timed actions for sleep and bath states. Includes a game over screen.',
        tags: ['JavaScript', 'Canvas API', 'Asynce', 'Alpine.js'],
        state: "Done for now",
        date: "2025",
        liveDemo: true,
        liveDemoUrl: "https://cyd-n.github.io/VPet/",
        git:"https://github.com/cyd-n/VPet" },
        {
        name: 'MusicCoreT, NuGet Library',
        short: 'MCT',
        img: 'Imgs/TERMINAL.png',
        desc: 'A packaged NuGet library for playing music in console and text-based games. Provides a clean API with note, playlist, and player classes. Playback runs on a background thread so the game loop is never blocked. Supports 3 octaves across all 7 notes with method overloading for flexible use.',
        tags: ['C#', 'NuGet', 'Music'],
        state: "Done for now",
        date: "2024",
        liveDemo: false,
        liveDemoUrl: "",
        git:"https://github.com/cyd-n/MusicCoreT" },
        {
        name: 'logic gate mobile game',
        short: 'MCT',
        img: 'Imgs/LogicGate.png',
        desc: 'A mobile logic gate game, to learn abut logic gates. It is horible and disconituened',
        tags: ['C#', 'Unity', 'Andriod'],
        state: "Done for now",
        date: "2026",
        liveDemo: false,
        liveDemoUrl: "",
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