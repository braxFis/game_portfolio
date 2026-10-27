
export default function CharacterPage() {
    return (
        <main className="character-page">
            <a href="/">← Tillbaka till portfolio</a>

            <model-viewer
                src="/models/Hero.glb"
                alt="Interaktiv 3D-karaktär"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                exposure="1"
                style={{ width: "100%", height: "80vh" }}
            />
        </main>
    );
}
