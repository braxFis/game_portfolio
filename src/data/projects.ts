/**
 * Lägg modeller i public/models och posters i public/posters.
 * Lägg sedan till EN post per projekt här. Det här är avsiktligt metadata,
 * inte en stor lista med komponenter: galleriet och projektsidorna genereras automatiskt.
 *
 * Exempel:
 * {
 *   id: "riptah",
 *   title: "Riptah",
 *   category: "Creature",
 *   model: "/models/riptah.glb",
 *   poster: "/posters/riptah.webp",
 *   description: "En karaktär skapad för ...",
 *   software: ["Blender", "Substance 3D Painter"],
 *   year: "2025"
 * }
 */
export type Project = {
  id: string;
  title: string;
  category: "Character" | "Creature" | "Environment" | "Prop";
  model: string;
  poster: string;
  description: string;
  software: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    id: "riptah",
    title: "Riptah",
    category: "Creature",
    model: "/models/riptah.glb",
    poster: "/posters/riptah.png",
    description:
      "En karaktärsstudie med fokus på silhuett, form, material och detaljrikedom. Ersätt den här texten med en kort beskrivning av ditt faktiska projekt.",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id: "cyberkatana",
    title:"Cyber Katana",
    category:"Prop",
    model: "/models/CyberKatana.glb",
    poster:"/posters/CyberKatanaPoster.png",
    description: "En futuristisk svärd",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id: "samuraisword",
    title: "Samurai Sword",
    category: "Prop",
    model: "/models/Samurai_Sword.glb",
    poster: "/posters/samurai_sword_poster.png",
    description: "A samurai sword",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id:"shotgun",
    title: "Shotgun Pump-action",
    category: "Prop",
    model: "/models/Shotgun_Pumpaction.glb",
    poster: "/posters/shotgun_pumpaction_poster.png",
    description: "A shotgun",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id: "shotgunshell",
    title:"Shotgun Shell",
    category: "Prop",
    model: "/models/Shotgun_Shell.glb",
    poster: "/posters/shotgun_shell_poster.png",
    description: "A shotgun shell",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id: "machinegun",
    title: "M134 - Machine Gun",
    category: "Prop",
    model: "/models/M134.glb",
    poster: "/posters/M134_poster.png",
    description:"A machine gun",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id: "grenade",
    title:"Grenade",
    category: "Prop",
    model: "/models/Grenade.glb",
    poster:"/posters/grenade_poster.png",
    description:"A grenade",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id:"grenadelauncher",
    title:"Grenade Launcher",
    category: "Prop",
    model: "/models/Grenade_Launcher.glb",
    poster:"/posters/Grenade_Launcher_poster.png",
    description:"A grenade launcher",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id:"chief",
    title:"Chief",
    category:"Character",
    model:"/models/Chief.glb",
    poster:"/posters/chief_poster.png",
    description:"The character Chief from Cuda Graale 2",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id:"kabbalah",
    title:"Kabbalah",
    category:"Character",
    model:"/models/Kabbalah.glb",
    poster:"/posters/kabbalah_poster.png",
    description:"The character Kabbalah from Cuda Graale 2",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  },
  {
    id:"calvin",
    title:"Calvin",
    category:"Character",
    model:"/models/Hero.glb",
    poster:"/posters/calvin_poster2.png",
    description:"The character Calvin from Cuda Graale 2",
    software: ["Blender", "Substance 3D Painter", "ZBrush"],
    year: "2025",
  }
];